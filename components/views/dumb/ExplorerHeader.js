import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '0 0 70px',
    alignItems: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: '9',
    justifyContent: 'flex-start',
    height: 38,
    alignItems: 'flex-end'
  },
  textInput: {
    width: 580,
    marginRight: 15,
    border: 'none',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    height: 25
  },
  submitInput: {
    padding: [6, 10],
    backgroundColor: 'transparent',
    border: '1px solid',
    borderRadius: '2px',
    cursor: 'pointer',
    outline: 'none',
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
    justifyContent: 'flex-end'
  },
  selectOption: {
    backgroundColor: 'transparent',
    padding: 10,
    fontWeight: 'bold',
    border: 'none',
    outline: 'none',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    cursor: 'pointer'
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
    <div className={classes.inputContainer}>
      <input
        className={classes.textInput}
        value={searchInput}
        onChange={handleSearchInput}
        type='text'
        placeholder={`Input a txid to search for specific ${selectOption}`}
      />
      <input
        type={'submit'}
        value={'Search'}
        onClick={handleSearchSubmit}
        className={classes.submitInput}
      />
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
