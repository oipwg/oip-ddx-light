import React from 'react'
import withStyles from 'react-jss'
import RecordNav from './RecordNav'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    justifyContent: 'center'
  },
  contentContainer: {
    padding: 60,
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto'
  }
})

const PublishPage = ({ classes, children, recordTypes, activeRecordType, handleRecordTypeChange }) => {
  return <div className={classes.root}>
    <RecordNav
      recordTypes={recordTypes}
      activeRecordType={activeRecordType}
      handleRecordTypeChange={handleRecordTypeChange}
    />
    <div className={classes.contentContainer}>
      {children}
    </div>
  </div>
}

export default withStyles(styles)(PublishPage)
