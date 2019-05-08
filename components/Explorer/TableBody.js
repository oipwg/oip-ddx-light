import React, { useRef, useEffect, useState } from 'react'
import withStyles from 'react-jss'
import { DaemonApi } from 'js-oip'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    padding: '0px 20px'

  }
})

const TableBody = ({ classes }) => {
  const DaemonRef = useRef(null)
  const [latestRecords, setLatestRecords] = useState([])

  function getDaemon () {
    if (DaemonRef.current === null) {
      DaemonRef.current = new DaemonApi('http://localhost:1606/oip')
    }
    return DaemonRef.current
  }

  useEffect(() => {
    let current = true

    async function getLatestRecords () {
      let daemon = getDaemon()
      let response
      response = await daemon.getLatestOip5Records()
      if (current) setLatestRecords(response)
    }

    getLatestRecords()
    return () => { current = false }
  }, [])
  console.log(latestRecords)
  return <div className={classes.root}>

  </div>
}

export default withStyles(styles)(TableBody)
