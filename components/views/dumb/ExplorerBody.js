import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import TemplateTable from './TemplateTable'
import RecordTable from './RecordTable'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: 10,
    overflowY: 'auto',
    paddingTop: 30,
    paddingRight: 50,
    paddingLeft: 50
  }
})

const ExplorerBody = ({
  classes,
  latestRecords,
  latestTemplates,
  activeSelection,
  currentRecord,
  currentTemplate
}) => {
  let records = activeSelection === 'Records'
  let templates = activeSelection === 'Templates'
  return <div className={classes.root}>
    {records && <RecordTable
      latestRecords={latestRecords}
      currentRecord={currentRecord}
    />}
    {templates && <TemplateTable
      latestTemplates={latestTemplates}
      currentTemplate={currentTemplate}
    />}
  </div>
}

ExplorerBody.propTypes = {
  latestRecords: PropTypes.object,
  latestTemplates: PropTypes.object,
  activeSelection: PropTypes.string,
  currentRecord: PropTypes.object,
  currentTemplate: PropTypes.object
}

export default withStyles(styles)(ExplorerBody)
