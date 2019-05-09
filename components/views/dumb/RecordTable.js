import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
  }
})

const RecordTable = ({
  classes,
  latestRecords,
  currentRecord
}) => {
  function deserializeRecords (records) {
    const {count, next, results, total} = records
    return results
  }
  return <div className={classes.root}>
  </div>
}

RecordTable.propTypes = {
  latestRecords: PropTypes.object,
  currentRecord: PropTypes.object
}

export default withStyles(styles)(RecordTable)
