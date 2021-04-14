import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import ExplorerHeader from '../dumb/explorerHeader/ExplorerHeader'
import ExplorerBody from '../dumb/explorerBody/ExplorerBody'
import ExplorerFooter from '../dumb/explorerFooter/ExplorerFooter'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '1',
    flexDirection: 'row'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    overflow: 'auto'
  }
})

const Explorer = ({
  classes,
  templates,
  records,
  searchInput,
  handleSearchInput,
  selectOption,
  handleSelectOption,
  handleSearchSubmit,
  recordsFetching,
  recordsError,
  templatesFetching,
  templatesError,
  publishRecord,
  publishTemplate,
  extendTemplates,
  handleSelectTemplate,
  selectedTemplates,
  handlePublishRecordWithTemplates,
  handleExtendTemplates,
  isVerified,
  showOnlyVerifiedPublishers
}) => {
  return <div className={classes.root}>
    <div className={classes.wrapper}>
      <ExplorerHeader
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
        selectOption={selectOption}
        handleSelectOption={handleSelectOption}
        handleSearchSubmit={handleSearchSubmit}
        recordsFetching={recordsFetching}
        templatesFetching={templatesFetching}
      />
      <ExplorerBody
        activeSelection={selectOption}
        records={records}
        templates={templates}
        recordsError={recordsError}
        templatesError={templatesError}
        publishRecord={publishRecord}
        publishTemplate={publishTemplate}
        extendTemplates={extendTemplates}
        handleSelectTemplate={handleSelectTemplate}
        selectedTemplates={selectedTemplates}
        isVerified={isVerified}
        showOnlyVerifiedPublishers={showOnlyVerifiedPublishers}
      />
      <ExplorerFooter
        templates={templates}
        records={records}
        activeSelection={selectOption}
        selectedTemplates={selectedTemplates}
        handlePublishRecordWithTemplates={handlePublishRecordWithTemplates}
        handleExtendTemplates={handleExtendTemplates}
      />
    </div>
  </div>
}

Explorer.propTypes = {
  records: PropTypes.object,
  templates: PropTypes.object,
  searchInput: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  selectOption: PropTypes.string.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  recordsFetching: PropTypes.bool,
  recordsError: PropTypes.bool,
  templatesFetching: PropTypes.bool,
  templatesError: PropTypes.bool,
  publishRecord: PropTypes.func.isRequired,
  publishTemplate: PropTypes.func.isRequired,
  extendTemplates: PropTypes.func.isRequired
}

export default withStyles(styles)(Explorer)
