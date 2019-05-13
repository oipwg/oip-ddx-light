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
  publishRecord,
  publishTemplate,
  forkTemplate
}) => {
  let displayRecords = activeSelection === 'Records'
  let displayTemplates = activeSelection === 'Templates'
  return <div className={classes.root}>
    {displayRecords && <RecordMap
      records={records}
    />}
    {displayTemplates && <TemplateMap
      templates={templates}
      publishRecord={publishRecord}
      publishTemplate={publishTemplate}
      forkTemplate={forkTemplate}
    />}
  </div>
}

ExplorerBody.propTypes = {
  records: PropTypes.object,
  templates: PropTypes.object,
  activeSelection: PropTypes.string,
  publishRecord: PropTypes.func.isRequired,
  publishTemplate: PropTypes.func.isRequired,
  forkTemplate: PropTypes.func.isRequired
}

export default withStyles(styles)(ExplorerBody)
