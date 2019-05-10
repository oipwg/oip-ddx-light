import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import isObjEmpty from '../../../util/isObjEmpty'
import RecordCard from './RecordCard'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})

const RecordMap = ({
  classes,
  displayRecords
}) => {
  let recordData = []
  if (!isObjEmpty(displayRecords)) {
    recordData = [...displayRecords.results]
  }
  return <div className={classes.root}>
    {recordData.map((payload, i) => {
      return <RecordCard
        template={payload.record}
        meta={payload.meta}
        key={i}
      />
    })}
  </div>
}

RecordMap.propTypes = {
  classes: PropTypes.object.isRequired,
  displayRecords: PropTypes.object
}

export default withStyles(styles)(RecordMap)
