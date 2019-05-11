import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import ExplorerHeader from '../dumb/ExplorerHeader'
import ExplorerBody from '../dumb/ExplorerBody'
import ExplorerFooter from '../dumb/ExplorerFooter'

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
  templatesError
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
      />
      <ExplorerFooter
        templates={templates}
        records={records}
        activeSelection={selectOption}
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
  templatesError: PropTypes.bool
}

export default withStyles(styles)(Explorer)
