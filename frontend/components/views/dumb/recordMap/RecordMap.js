import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import isObjEmpty from '../../../../util/isObjEmpty'
import RecordRow from '../recordRow/RecordRow'

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    padding: [0, 30],
    boxSizing: 'border-box',
    '& table': {
      borderCollapse: 'collapse',
      borderSpacing: 0
    }
  },
  [`@media (max-width: ${theme.breakpoints['sm']}px)`]: {
    root: {
      // justifyContent: 'center'
    }
  }
})

const RecordMap = ({
  classes,
  records,
  isVerified,
  showOnlyVerifiedPublishers,
  purchasedData,
  handleClick,
}) => {
  let recordData = []
  if (Array.isArray(records)) {
    recordData = records
  } else if (!isObjEmpty(records)) {
    recordData = [...records.results]
  }
  return <div className={classes.root}>
    <div>
      {recordData.map(payload => {
        const { meta, record } = payload
        if (!record) {
          console.error('Missing record data for following payload:', payload)
          return null
        }
        return <RecordRow
          record={record}
          meta={meta}
          isVerified={isVerified}
          key={meta.txid}
          showOnlyVerifiedPublishers={showOnlyVerifiedPublishers}
          purchasedData={purchasedData}
          handleClick={handleClick}
        />
      })}
    </div>
  </div>
}

RecordMap.propTypes = {
  classes: PropTypes.object.isRequired,
  records: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
}

export default withStyles(styles)(RecordMap)
