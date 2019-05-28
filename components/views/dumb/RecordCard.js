import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const BASIC_TEMPLATE = 'tmpl_00000000000BA51C'
const FILE_TEMPLATE = 'tmpl_000000000000F113'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '15px',
    height: '275px',
    width: '200px',
    margin: [5, 10],
    boxShadow: theme.shadows[1],
    borderRadius: '3px',
    boxSizing: 'border-box'
  },
  recordSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flex: '0 0 56px',
    position: 'relative'
  },
  recordFieldTitle: {
    position: 'absolute',
    fontSize: 12,
    color: 'grey',
    top: 0,
    left: 0
  },
  recordField: {
    fontSize: 14,
    marginTop: 20
  }
})

const RecordCard = ({ classes, record, meta }) => {
  const { details } = record
  const { [BASIC_TEMPLATE]: basicTemplate } = details

  // toDo: handle records without the BASIC template
  if (!basicTemplate) {
    return null
  }

  const { title, description, year } = basicTemplate

  return <div className={classes.root}>
    <div className={classes.recordSection}>
      <span className={classes.recordFieldTitle}>Title</span>
      <span className={classes.recordField}>{title}</span>
    </div>
    <div className={classes.recordSection}>
      <span className={classes.recordFieldTitle}>Year</span>
      <span className={classes.recordField}>{year}</span>
    </div>
    <div className={classes.recordSection}>
      <span className={classes.recordFieldTitle}>Description</span>
      <span className={classes.recordField}>{description}</span>
    </div>
  </div>
}

RecordCard.propTypes = {
  classes: PropTypes.object.isRequired,
  record: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
}

export default withStyles(styles)(RecordCard)
