import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import NavMenu from '../navMenu/NavMenu'
import NavMenuMobile from '../navMenuMobile/NavMenuMobile'
import { setActivePage, toggleVerifiedPublishers } from '../../../../redux/actions/Interface/creators'
import ToggleSwitch from '../../../ui/ToggleSwitch'
import { getDefaultRecords, getDefaultTemplates } from '../../../../redux/actions/Explorer/thunks'
import Link from 'next/link'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 180px',
      backgroundColor: theme.palette.primary.main,
      boxShadow: theme.shadows[3],
      zIndex: 300
      // justifyContent: 'space-between'
    },
    titleSpace: {
      color: theme.palette.background.main,
      alignSelf: 'center',
      flexShrink: 0
    },
    titleHeader: {
      fontSize: '3em',
      fontWeight: 'bold',
      textAlign: 'center'
    },
    toggleSwitch: {
      marginBottom: 30,
      marginTop: 'auto',
      display: 'flex',
      width: 180,
      justifyContent: 'center',
      alignItems: 'center'
    },
    toggleSwitchText: {
      fontSize: 12,
      color: 'white',
      margin: [0, 5]
    },
    loginButton: {
      margin: 16,
      padding: 4,
      border: 1,
      borderColor: 'black',
      borderStyle: 'solid',
      textAlign: 'center',
      borderRadius: '3px',
      backgroundColor: 'white'
    },
    [`@media (max-width: ${theme.breakpoints['md']}px)`]: {
      root: {
        flexDirection: 'row',
        flex: '0 0 70px',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      toggleSwitch: {
        display: 'none'
      },
      titleSpace: {
        marginLeft: 40,
        '& h1': {
          margin: 0,
          textAlign: 'center'
        }
      }
    }
  }
}

const SideBar = ({
  classes,
  activePage,
  setActivePage,
  pages,
  reroute,
  router,
  floExchangeRate,
  floBalanceSat,
  toggleVerifiedPublishers,
  showOnlyVerifiedPublishers,
  getDefaultRecords,
  getDefaultTemplates
}) => {
  function handleSetActivePage (page) {
    if (reroute) {
      // re route to index page
      router.push('/')
    }
    setActivePage(page)
    if (activePage === 'explorer' && page === 'explorer') {
      getDefaultRecords()
      getDefaultTemplates()
    }
  }

  function handleToggleSwitch (toggleState) {
    toggleVerifiedPublishers(toggleState)
  }

  return (
    <div id='sidebar' className={classes.root}>

      <div>
        <div className={classes.loginButton}>
          <Link passHref href={`/login`}><a>Login</a></Link>
        </div>
        
        <div className={classes.loginButton}>
          <Link passHref href={`/register`}><a>Sign Up</a></Link>
        </div>
      </div>

      <div className={classes.titleSpace}>
        <h1 className={classes.titleHeader}>OIP</h1>
      </div>
      <NavMenu
        activePage={activePage}
        setActivePage={handleSetActivePage}
        pages={pages}
        floExchangeRate={floExchangeRate}
        floBalanceSat={floBalanceSat}
      />
      <NavMenuMobile
        activePage={activePage}
        setActivePage={handleSetActivePage}
        pages={pages}
      />
      <div className={classes.toggleSwitch}>
        <span className={classes.toggleSwitchText}>All</span>

        <ToggleSwitchJSS
          onSwitch={handleToggleSwitch}
          defaultState={showOnlyVerifiedPublishers}
        />
        <span className={classes.toggleSwitchText}>Verified</span>
      </div>
    </div>
  )
}

const toggleStyles = theme => ({
  switch: {
    width: 26,
    height: 14
  },
  slider: {
    backgroundColor: 'white',
    '&:before': {
      height: 18,
      width: 18,
      left: '-8px',
      top: '-2px',
      backgroundColor: 'black'
    }
  },
  '@global': {
    input: {
      '&:checked + $slider': {
        backgroundColor: 'black'
      },
      '&:checked + $slider:before': {
        backgroundColor: 'white'
      }
    }
  }
})
const ToggleSwitchJSS = withStyles(toggleStyles)(ToggleSwitch)

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string,
  setActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  reroute: PropTypes.bool,
  getDefaultRecords: PropTypes.func.isRequired,
  getDefaultTemplates: PropTypes.func.isRequired
}

function mapStateToProps (state) {
  return {
    activePage: state.Interface.activePage,
    pages: state.Interface.pages,
    floBalanceSat: state.Wallet.floBalanceSat,
    floExchangeRate: state.Wallet.floExchangeRate,
    showOnlyVerifiedPublishers: state.Interface.showOnlyVerifiedPublishers
  }
}

const mapDispatchToProps = {
  setActivePage,
  toggleVerifiedPublishers,
  getDefaultRecords,
  getDefaultTemplates
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(SideBar)))
