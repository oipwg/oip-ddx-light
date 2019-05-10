import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import NavMenu from './NavMenu'
import NavMenuMobile from './NavMenuMobile'

const styles = theme => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flex: '0 0 180px',
      backgroundColor: theme.palette.primary.main,
      boxShadow: theme.shadows[3],
      zIndex: 300
    },
    titleSpace: {
      color: theme.palette.background.main,
      alignSelf: 'center',
      flexShrink: 0,
    },
    titleHeader: {
      fontSize: '3em',
      fontWeight: 'bold'
    },
    [`@media (max-width: ${theme.breakpoints['md']}px)`]: {
      root: {
        flexDirection: 'row',
        flex: '0 0 70px',
        justifyContent: 'space-between',
        alignItems: 'center'
      },
      titleSpace: {
        marginLeft: 40,
        '& h1': {
          margin: 0
        }
      }
    }
  }
}

const SideBar = ({
  classes,
  activePage,
  setActivePage,
  pages
}) => {
  return <div id='sidebar' className={classes.root}>
    <div className={classes.titleSpace}>
      <h1 className={classes.titleHeader}>OIP</h1>
    </div>
    <NavMenu
      activePage={activePage}
      setActivePage={setActivePage}
      pages={pages}
    />
    <NavMenuMobile
      activePage={activePage}
      setActivePage={setActivePage}
      pages={pages}
    />
  </div>
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired
}

export default withStyles(styles)(SideBar)
