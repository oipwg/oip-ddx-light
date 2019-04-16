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
  </div>
}

export default withStyles(styles)(Explorer)
