import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import ExplorerHeader from '../dumb/ExplorerHeader'
import ExplorerBody from '../dumb/ExplorerBody'
import ExplorerFooter from '../dumb/ExplorerFooter'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '0 0 calc(100% - 180px)',
    flexDirection: 'row'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    padding: '30px 70px',
    overflow: 'auto'
  },
  explorerPaper: {
    boxSizing: 'border-box',
    boxShadow: theme.shadows[1],
    flex: '0 0 100%',
    minWidth: '1000px',
    minHeight: '800px',
    display: 'flex',
    flexDirection: 'column'
  }
})

const Explorer = ({
  classes,
  latestRecords,
  latestTemplates,
  searchInput,
  handleSearchInput,
  selectOption,
  handleSelectOption,
  handleSearchSubmit,
  currentRecord,
  currentTemplate
}) => {
  return <div className={classes.root}>
    <div className={classes.wrapper}>
      <div className={classes.explorerPaper}>
        <ExplorerHeader
          searchInput={searchInput}
          handleSearchInput={handleSearchInput}
          selectOption={selectOption}
          handleSelectOption={handleSelectOption}
          handleSearchSubmit={handleSearchSubmit}
        />
        <ExplorerBody
          latestRecords={latestRecords}
          latestTemplates={latestTemplates}
          activeSelection={selectOption}
          currentRecord={currentRecord}
          currentTemplate={currentTemplate}
        />
        <ExplorerFooter
          latestRecords={latestRecords}
          latestTemplates={latestTemplates}
          activeSelection={selectOption}
          currentRecord={currentRecord}
          currentTemplate={currentTemplate}
        />
      </div>
    </div>
  </div>
}

Explorer.propTypes = {
  latestRecords: PropTypes.object,
  latestTemplates: PropTypes.object,
  searchInput: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  selectOption: PropTypes.string.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  currentRecord: PropTypes.object,
  currentTemplate: PropTypes.object
}

export default withStyles(styles)(Explorer)
