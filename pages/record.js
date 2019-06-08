import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import SwitchViewer from '../components/views/dumb/SwitchViewer'
import RecordMap from '../components/views/dumb/RecordMap'
import PaymentRow from '../components/views/dumb/PaymentRow'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  recordViewer: {
    display: 'flex',
    flex: '1 0 450px',
    flexDirection: 'column'
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
  daemonApi
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
      getRecordsByPublisher()
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
  const TMPL_PAYMENT = 'tmpl_3084380E'
  let payment = false; let paymentInfo
  if (recordPayload.record.details[TMPL_PAYMENT]) {
    payment = true
    paymentInfo = recordPayload.record.details[TMPL_PAYMENT]
  }
  return <div className={classes.root}>
    <div className={classes.recordViewer}>
      <SwitchViewer
        recordPayload={recordPayload}
      />
      {payment && <PaymentRow paymentInfo={paymentInfo} />}
    </div>
    <div className={classes.recordsByPublisher}>
      <RecordMap
        records={recordsByPublisher}
        isVerified={isVerified}
      />
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
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Record)
