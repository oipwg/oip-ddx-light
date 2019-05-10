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
    padding: '15px 30px',
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
  displayTemplates,
  displayRecords,
  searchInput,
  handleSearchInput,
  selectOption,
  handleSelectOption,
  handleSearchSubmit,
}) => {
  return <div className={classes.root}>
    <div className={classes.wrapper}>

      <ExplorerHeader
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
        selectOption={selectOption}
        handleSelectOption={handleSelectOption}
        handleSearchSubmit={handleSearchSubmit}
      />
      <ExplorerBody
        activeSelection={selectOption}
        displayRecords={displayRecords}
        displayTemplates={displayTemplates}
      />
      <ExplorerFooter
        displayRecords={displayRecords}
        displayTemplates={displayTemplates}
        activeSelection={selectOption}
      />
    </div>
  </div>
}

Explorer.propTypes = {
  displayRecords: PropTypes.object.isRequired,
  displayTemplates: PropTypes.object.isRequired,
  searchInput: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  selectOption: PropTypes.string.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
}

export default withStyles(styles)(Explorer)
