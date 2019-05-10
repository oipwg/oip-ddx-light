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
}) => {
  return <div className={classes.root}>
    <div className={classes.wrapper}>
      {/*<ExplorerHeader*/}
      {/*  searchInput={searchInput}*/}
      {/*  handleSearchInput={handleSearchInput}*/}
      {/*  selectOption={selectOption}*/}
      {/*  handleSelectOption={handleSelectOption}*/}
      {/*  handleSearchSubmit={handleSearchSubmit}*/}
      {/*/>*/}
      {/*<ExplorerBody*/}
      {/*  activeSelection={selectOption}*/}
      {/*  records={records}*/}
      {/*  templates={templates}*/}
      {/*/>*/}
      {/*<ExplorerFooter*/}
      {/*  displayRecords={templates}*/}
      {/*  records={records}*/}
      {/*  activeSelection={selectOption}*/}
      {/*/>*/}
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
}

export default withStyles(styles)(Explorer)
