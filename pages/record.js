import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SwitchViewer from '../components/views/dumb/SwitchViewer'
import RecordMap from '../components/views/dumb/RecordMap'
import PaymentRow from '../components/views/dumb/PaymentRow'
import SideBar from '../components/views/dumb/SideBar'
import { tip } from '../redux/actions/Wallet/thunks'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100%'
  },
  [`@media (max-width: ${theme.breakpoints['md']}px)`]: {
    root: {
      flexDirection: 'column'
    }
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
    flex: 1
  },
  recordViewer: {
    display: 'flex',
    flex: '1 0 700px',
    flexDirection: 'column',
    maxHeight: 700
    // height: 1000
  },
  recordsByPublisher: {
    display: 'flex',
    flex: 1,
    minHeight: '50%',
    flexDirection: 'column',
    '& h3': {
      paddingLeft: 30,
      color: theme.palette.greyscale(0.8)
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
  showOnlyVerifiedPublishers
}) => {
  // get records by the same publisher
  const [ recordsByPublisher, setRecordsByPublisher ] = useState([])
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

  async function isVerified ({ pubAddr, templateName, apiUrl, localhost }) {
    try {
      return await daemonApi.isVerifiedPublisher({ pubAddr, templateName, apiUrl, localhost })
    } catch (err) {
      console.error(`Failed to verify pub address: ${pubAddr}: \n ${err}`)
      return { success: false, error: err }
    }
  }
  // check if record includes a payment template
  const TMPL_PAYMENT = 'tmpl_3084380E'
  let payment = false
  if (recordPayload.record.details[TMPL_PAYMENT]) {
    payment = true
  }
  return <div className={classes.root}>
    <SideBar reroute />
    <div className={classes.content}>
      <div className={classes.recordViewer}>
        <SwitchViewer
          recordPayload={recordPayload}
        />
        {payment && <PaymentRow
          paymentTemplate={recordPayload.record.details[TMPL_PAYMENT]}
          registered={registered}
          platformData={platformData}
          paymentAddress={recordPayload.meta.signed_by}
          tip={tip}
        />}
      </div>
      <div className={classes.recordsByPublisher}>
        <RecordMap
          records={recordsByPublisher}
          isVerified={isVerified}
          showOnlyVerifiedPublishers={showOnlyVerifiedPublishers}
        />
      </div>
    </div>
  </div>
}

Record.getInitialProps = async (ctx) => {
  const { reduxStore, query } = ctx
  const { getState } = reduxStore
  // const isServer = !!req

  let state = getState()
  const { Explorer } = state
  let daemon = Explorer.daemonApi

  const txid = query.txid

  let response = await daemon.getOip5Record(txid)
  const { success, payload, error } = response
  if (success) {
    const { results } = payload
    if (results[0]) {
      return {
        recordPayload: results[0],
        daemonApi: daemon
      }
    }
  } else { console.error(error) }

  return {
    daemonApi: daemon
  }
}

Record.propTypes = {
  classes: PropTypes.object.isRequired,
  registered: PropTypes.bool.isRequired,
  platformData: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    registered: state.Platform.registered,
    platformData: state.Platform.platformData,
    showOnlyVerifiedPublishers: state.Platform.showOnlyVerifiedPublishers
  }
}
const mapDispatchToProps = {
  tip
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Record))
