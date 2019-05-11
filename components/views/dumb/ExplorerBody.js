import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import TemplateMap from './TemplateMap'
import RecordMap from './RecordMap'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: 10,
  }
})

const ExplorerBody = ({
  classes,
  records,
  templates,
  activeSelection,

}) => {
  let displayRecords = activeSelection === 'Records'
  let displayTemplates = activeSelection === 'Templates'
  return <div className={classes.root}>
    {displayRecords && <RecordMap
      records={records}
    />}
    {displayTemplates && <TemplateMap
      templates={templates}
    />}
  </div>
}

ExplorerBody.propTypes = {
  records: PropTypes.object,
  templates: PropTypes.object,
  activeSelection: PropTypes.string
}

export default withStyles(styles)(ExplorerBody)
