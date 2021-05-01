import React , { useEffect, useState } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { MdSearch } from 'react-icons/md'
import ReactLoader from '../../../library/ReactLoader'

import styles from './styles'

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
    const displayName = localStorage.getItem("displayName")
    if (displayName) {
      setDisplayName(displayName)
    }
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
    if (!displayName) return null
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
