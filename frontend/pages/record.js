import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ReactLoader from '../src/components/library/ReactLoader' //import ReactLoader from '../../../library/ReactLoader'
import { MdSearch } from 'react-icons/md'

import SideBar from '../src/components/library/SideBar/SideBar'
import {
  getBalance,
  getExchangeRate,
  tip,
  purchaseRecord,
  proofOfPurchase
} from '../src/redux/modules/Wallet/thunks'

import { setActivePage } from '../src/redux/actions/Interface/creators'
import RecordView from '../src/components/views/Record'
import { TMPL_PAYMENT } from '../templates'

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    root: {
      flexDirection: 'column'
    }
  }
})

const Record = ({
  classes,
  recordPayload,
  daemonApi,
  registered,
  platformData,
  tip,
  showOnlyVerifiedPublishers,
  setActivePage,
  getExchangeRate,
  getBalance,
  autoPay,
  purchaseRecord,
  proofOfPurchase,
  searchInput,
  handleSearchInput,
  recordsFetching,
  templatesFetching,
  theme
}) => {

  const fetching = recordsFetching || templatesFetching

  function handleOnEnter (e) {
    if (e.keyCode === 13 && !fetching) {
      handleSubmit()
    }
  }

  function handleSubmit () {
    handleSearchSubmit()
  }
  
  useEffect(() => {
    setActivePage(null)
  }, [])

  const [purchasedData, setPurchasedData] = useState({
    proofTxid: '',
    data: '',
    paid: false
})

useEffect(() => {
  if (recordPayload.record.details.tmpl_4BC3CC71 && recordPayload.record.details.tmpl_4BC3CC71.paymentPointer) {
    document.getElementById("paymentPointerHead").setAttribute("content", recordPayload.record.details.tmpl_4BC3CC71.paymentPointer)
  } else {
    document.getElementById("paymentPointerHead").setAttribute("content", "")
  }
})

/*
componentWillUnmount(() => {
  document.getElementById("paymentPointerHead").setAttribute("content", "")
})
*/

useEffect(() => {
  if(autoPay.purchased){
    let { txid } = recordPayload.meta

    let found = autoPay.purchased.find(purchase => {
      return purchase.txid === txid
    })
  }
  })

  useEffect(() => {
    if (autoPay.purchased) {
      const { txid } = recordPayload.meta

      const found = autoPay.purchased.find(purchase => {
        return purchase.txid === txid
      })

      if (found) {
        const { txid, payment_txid, terms } = found
        proofOfPurchase({ txid, payment_txid, terms })
          .then(data => {
            setPurchasedData({
              proofTxid: payment_txid,
              data: data,
              paid: true
            })
          })
          .catch(err => console.log(err))
      }
    }
  }, [autoPay.purchased, proofOfPurchase, recordPayload.meta])

  // get records by the same publisher
  const [recordsByPublisher, setRecordsByPublisher] = useState([])
  useEffect(() => {
    let current = true
    const getRecordsByPublisher = async () => {
      const { meta } = recordPayload
      const q = `meta.signed_by:${meta.signed_by}`
      let res
      try {
        res = await daemonApi.searchOip5Records({ q, limit: 100 })
      } catch (err) {
        console.error(err)
      }
      if (!res) return

      const { success, payload, error } = res
      if (success) {
        const { results } = payload
        if (results.length > 0) {
          if (current) {
            setRecordsByPublisher(results)
          }
        }
      } else {
        console.error(error)
      }
    }
    if (recordPayload) {
      try {
        getRecordsByPublisher()
      } catch (err) {
        console.error(`Failed to get records by publisher: \n ${err}`)
      }
    }

    return () => {
      current = false
    }
  }, [])

  // get flo balance and exchange rate
  useEffect(() => {
    let current = true
    const getXrAndBalance = async () => {
      if (current) {
        await getExchangeRate()
        await getBalance()
      }
    }
    getXrAndBalance()
    return () => {
      current = false
    }
  }, [])

  async function isVerified ({ pubAddr, templateName, apiUrl, localhost }) {
    try {
      return await daemonApi.isVerifiedPublisher({
        pubAddr,
        templateName,
        apiUrl,
        localhost
      })
    } catch (err) {
      console.error(`Failed to verify pub address: ${pubAddr}: \n ${err}`)
      return { success: false, error: err }
    }
  }

  // check if record includes a payment template
  let payment = false
  if (recordPayload.record.details[TMPL_PAYMENT]) {
    payment = true
  }
  return (
    <div className={classes.root}>
      <SideBar reroute/>
      <div className={classes.searchContainer}>
        <div className={classes.inputContainer}>
          <input
            className={classes.textInput}
            value={searchInput}
            onChange={handleSearchInput}
            type='text'
            placeholder={'Search'}
            onKeyUp={handleOnEnter}
          />
        </div>
        <button
          onClick={handleSubmit}
          className={classes.submitInput}
          disabled={fetching}
        >
          {fetching ? <ReactLoader
            size={14}
            color={theme.palette.primary.main}
          /> : <MdSearch /> }

        </button>
      </div>
      <RecordView
        recordPayload={recordPayload}
        purchasedData={purchasedData}
        payment={payment}
        registered={registered}
        platformData={platformData}
        recordsByPublisher={recordsByPublisher}
        isVerified={isVerified}
        showOnlyVerifiedPublishers={showOnlyVerifiedPublishers}
        autoPay={autoPay}
        purchaseRecord={purchaseRecord}
        proofOfPurchase={proofOfPurchase}
        tip={tip}
      />
    </div>
  )
}

Record.getInitialProps = async (ctx) => {
  const { reduxStore, query } = ctx
  const { getState } = reduxStore
  // const isServer = !!req

  const state = getState()
  const { Explorer } = state

  const txid = query.txid

  const response = await Explorer.daemonApi.getOip5Record(txid)
  const { success, payload, error } = response
  if (success) {
    const { results } = payload
    if (results[0]) {
      return {
        recordPayload: results[0]
      }
    }
  } else {
    console.error(error)
  }

  return {}
}

Record.propTypes = {
  classes: PropTypes.object.isRequired,
  registered: PropTypes.bool.isRequired,
  platformData: PropTypes.object.isRequired,
  daemonApi: PropTypes.object.isRequired,
  setActivePage: PropTypes.func.isRequired,
  getExchangeRate: PropTypes.func.isRequired,
  getBalance: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    registered: state.Platform.registered,
    platformData: state.Platform.platformData,
    showOnlyVerifiedPublishers: state.Interface.showOnlyVerifiedPublishers,
    daemonApi: state.Explorer.daemonApi,
    autoPay: state.Autopay
  }
}

const mapDispatchToProps = {
  tip,
  setActivePage,
  getExchangeRate,
  getBalance,
  purchaseRecord,
  proofOfPurchase
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { injectTheme: true})(Record))
