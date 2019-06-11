import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import NavMenu from './NavMenu'
import NavMenuMobile from './NavMenuMobile'
import { setActivePage, toggleVerifiedPublishers } from '../../../redux/actions/Interface/creators'
import ToggleSwitch from '../../ui/ToggleSwitch'

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
      alignSelf: 'center'
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
  showVerifiedPublishers
}) => {
  function handleSetActivePage (page) {
    if (reroute) {
      // re route to index page
      router.push('/')
    }
    setActivePage(page)
  }

  function handleToggleSwitch (toggleState) {
    toggleVerifiedPublishers(toggleState)
  }

  return <div id='sidebar' className={classes.root}>
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
      <ToggleSwitchJSS
        onSwitch={handleToggleSwitch}
        defaultState={showVerifiedPublishers}
      />
    </div>
  </div>
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
      backgroundColor: theme.palette.info.main
    }
  },
  '@global': {
    input: {
      '&:checked + $slider': {
        backgroundColor: theme.palette.greyscale(0.1)
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
  reroute: PropTypes.bool
}

function mapStateToProps (state) {
  return {
    activePage: state.Interface.activePage,
    pages: state.Interface.pages,
    floBalanceSat: state.Wallet.floBalanceSat,
    floExchangeRate: state.Wallet.floExchangeRate,
    showVerifiedPublishers: state.Interface.showVerifiedPublishers
  }
}

const mapDispatchToProps = {
  setActivePage,
  toggleVerifiedPublishers
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(SideBar)))
