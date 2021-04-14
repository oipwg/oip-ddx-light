import React , { useEffect, useState } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { MdSearch } from 'react-icons/md'
import ReactLoader from '../../../shared/ReactLoader'

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
    outline: 'none'
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
  handleSearchSubmit,
  recordsFetching,
  templatesFetching,
  theme
}) => {
  const fetching = recordsFetching || templatesFetching
  const [displayName, setDisplayName] = useState()

  useEffect(() => {
    setDisplayName(localStorage.getItem("displayName"))
  }, []);

  function handleOnEnter (e) {
    if (e.keyCode === 13 && !fetching) {
      handleSubmit()
    }
  }

  function handleSubmit () {
    handleSearchSubmit()
  }

  function UserGreeting(props) {
    //return <h3>{window.localStorage.getItem("displayName")} is logged in</h3>;
    return <div>{displayName} is logged in!</div>
  }
  
  function GuestGreeting(props) {
    return <h3>Not Logged In.</h3>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (true) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }

  return <div className={classes.root}>
    <div className={classes.searchContainer}>
      <div className={classes.inputContainer}>
        <input
          className={classes.textInput}
          value={searchInput}
          onChange={handleSearchInput}
          type='text'
          placeholder={`Search`}
          onKeyUp={handleOnEnter}
        />
      </div>
      <button
        onClick={handleSubmit}
        className={classes.submitInput}
        disabled={fetching}
      >
        {fetching ? <ReactLoader
          size={14}
          color={theme.palette.primary.main}
        /> : <MdSearch /> }

      </button>
    </div>
    <div className={classes.selectOptionContainer}>
      <select className={classes.selectOption} value={selectOption} onChange={handleSelectOption}>
        <option value={'Records'}>Records</option>
        <option value={'Templates'}>Templates</option>
      </select>
    </div>
    <div>
      <Greeting isLoggedIn={true}>
      </Greeting>
    </div>
  </div>
}

ExplorerHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  searchInput: PropTypes.string.isRequired,
  handleSearchInput: PropTypes.func.isRequired,
  selectOption: PropTypes.string.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
  handleSearchSubmit: PropTypes.func.isRequired,
  recordsFetching: PropTypes.bool,
  templatesFetching: PropTypes.bool
}

export default withStyles(styles, { injectTheme: true })(ExplorerHeader)
