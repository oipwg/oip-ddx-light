import React from 'react'
import withStyles from 'react-jss'

import RecordNav from './RecordNav'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto'
  }
})

const Explorer = ({ classes, activeRecordType, recordTypes, handleRecordTypeChange }) => {
  return <div className={classes.root}>
    <RecordNav
      activeRecordType={activeRecordType}
      recordTypes={recordTypes}
      handleRecordTypeChange={handleRecordTypeChange}
    />
    <ExplorerPageWithStyles/>
  </div>
}

const ExplorerPage = ({ classes }) => {
  return <div className={classes.root}>

  </div>
}
const explorerPageStyles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto'
  }
})
const ExplorerPageWithStyles = withStyles(explorerPageStyles)(ExplorerPage)

export default withStyles(styles)(Explorer)
