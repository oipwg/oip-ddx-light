import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import TemplateMap from '../templateMap/TemplateMap'
import RecordMap from '../recordMap/RecordMap'
import Explorer from '../../wrappers/Explorer'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: 10
  }
})

const ExplorerBody = ({
  classes,
  records,
  templates,
  activeSelection,
  publishRecord,
  publishTemplate,
  extendTemplates,
  handleSelectTemplate,
  selectedTemplates,
  isVerified,
  showOnlyVerifiedPublishers
}) => {
  let displayRecords = activeSelection === 'Records'
  let displayTemplates = activeSelection === 'Templates'
  return <div className={classes.root}>
    {displayRecords && <RecordMap
      records={records}
      isVerified={isVerified}
      showOnlyVerifiedPublishers={showOnlyVerifiedPublishers}
    />}
    {displayTemplates && <TemplateMap
      templates={templates}
      publishRecord={publishRecord}
      publishTemplate={publishTemplate}
      extendTemplates={extendTemplates}
      handleSelectTemplate={handleSelectTemplate}
      selectedTemplates={selectedTemplates}
    />}
  </div>
}

ExplorerBody.propTypes = {
  records: PropTypes.object,
  templates: PropTypes.object,
  activeSelection: PropTypes.string,
  publishRecord: PropTypes.func.isRequired,
  publishTemplate: PropTypes.func.isRequired,
  extendTemplates: PropTypes.func.isRequired
}

export default withStyles(styles)(ExplorerBody)
