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
  basicTemplateRoot: {},
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
  // if (!basicTemplate) {
  //   return null
  // }

  return <div className={classes.root}>
    {basicTemplate ? <BasicTemplate
      classes={classes}
      basicTemplate={basicTemplate}
    /> : <DumbTemplate
      classes={classes}
      record={record}
    />}
  </div>
}
const DumbTemplate = ({ classes, record }) => {
  let details = record.details
  return <div className={classes.basicTemplateRoot}>
    {Object.keys(details).map((tmpl, i) => {
      return <div key={i}>{tmpl}</div>
    })}
  </div>
}

const BasicTemplate = ({ classes, basicTemplate }) => {
  const { title, description, year } = basicTemplate
  return <div className={classes.basicTemplateRoot}>
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
