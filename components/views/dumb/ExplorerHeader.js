import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { MdSearch } from 'react-icons/md'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '0 0 70px',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '9',
    justifyContent: 'flex-start',
    height: 30,
    alignItems: 'flex-end',
    marginLeft: 30
  },
  inputContainer: {
    display: 'flex',
    flex: 1,
    border: `1px solid ${theme.palette.primary.main}`,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2
  },
  textInput: {
    marginRight: 15,
    border: '0',
    height: 32,
    flex: 1,
    padding: [0, 20],
    boxSizing: 'border-box',
  },
  submitInput: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    height: 34,
    boxSizing: 'border-box',
    borderTop: `1px solid ${theme.palette.primary.main}`,
    borderRight: `1px solid ${theme.palette.primary.main}`,
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderLeft: 0,
    fontSize: 19,
    padding: [0, 23],
    '& > svg': {
      color: theme.palette.primary.main
    },
    display: 'flex',
    '&:hover': {
      color: theme.palette.secondary.main
    },
    '&:active': {
      color: theme.palette.primary.main
    }
  },
  selectOptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '3',
    marginBottom: 9,
    height: 30,
    justifyContent: 'center'
  },
  selectOption: {
    height: 34,
    marginLeft: 20,
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.main,
    borderRadius: 2
  }
})

const ExplorerHeader = ({
  classes,
  searchInput,
  handleSearchInput,
  selectOption,
  handleSelectOption,
  handleSearchSubmit
}) => {
  return <div className={classes.root}>
    <div className={classes.searchContainer}>
      <div className={classes.inputContainer}>
        <input
          className={classes.textInput}
          value={searchInput}
          onChange={handleSearchInput}
          type='text'
          placeholder={`Search`}
        />
      </div>
      <button
        onClick={handleSearchSubmit}
        className={classes.submitInput}
      ><MdSearch/></button>
    </div>
    <div className={classes.selectOptionContainer}>
      <select className={classes.selectOption} value={selectOption} onChange={handleSelectOption}>
        <option value={'Records'}>Records</option>
        <option value={'Templates'}>Templates</option>
      </select>
    </div>
  </div>
}

ExplorerHeader.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  selectOption: PropTypes.string.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(ExplorerHeader)
