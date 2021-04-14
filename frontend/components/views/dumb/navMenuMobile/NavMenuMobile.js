import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'
import { MdMenu, MdClose } from 'react-icons/md'
import useWindowSize from '../../../../helpers/hooks/useWindowSize'

const styles = theme => ({
  root: {
    display: 'none',
    marginRight: 40,
    color: theme.palette.background.main
  },
  responsiveMenu: {
    display: 'none'
  },
  tableOfContents: {
    display: 'flex',
    flexDirection: 'column'
  },
  menuToggle: {
    display: 'flex',
    cursor: 'pointer',
    fontSize: 31
  },
  [`@media (max-width: ${theme.breakpoints['md']}px)`]: {
    root: {
      display: 'flex'
    }
  }
})

const NavMenuMobile = ({
  classes,
  pages,
  activePage,
  setActivePage
}) => {
  const [isOpen, toggleMenu] = useState(false)

  const { width } = useWindowSize({})
  useEffect(() => {
    if (width > 960) {
      toggleMenu(false)
    }
  }, [width])

  useEffect(() => {
    toggleMenu(false)
  }, [activePage])

  function handleToggleMenu () {
    toggleMenu(prevState => !prevState)
  }
  return <div className={classes.root}>
    <span
      className={classes.menuToggle}
      onClick={handleToggleMenu}
    >
      {isOpen ? <MdClose /> : <MdMenu />}
    </span>
    {isOpen ? <NavJSS
      pages={pages}
      setActivePage={setActivePage}
      activePage={activePage}
    /> : null}
  </div>
}

const navStyles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 70,
    backgroundColor: theme.palette.background.main,
    width: 175,
    right: 0,
    boxShadow: theme.shadows[2],
    zIndex: 300,
    color: theme.palette.primary.main,
    padding: [20, 0]
  },
  navItem: {
    display: 'flex',
    flex: '0 0 40px',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    padding: [10, 0],
    textTransform: 'capitalize',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.background.main,
      backgroundColor: theme.palette.primary.main

    }
  },
  pageName: {
    marginLeft: 20
  }
})

const Nav = ({ classes, pages, setActivePage }) => {
  return <div className={classes.root}>
    {pages.map((page, i) => {
      let displayName
      if (page === 'publisher') {
        displayName = 'New Template'
      } else if (page === 'explorer') {
        displayName = 'Explorers'
      } else if (page === 'autoPay') {
        displayName = 'Autopay'
      } else displayName = page
      return <div
        className={classes.navItem}
        key={i}
        onClick={() => setActivePage(page)}
      >
        <span className={classes.pageName}>{displayName}</span>
      </div>
    })}
  </div>
}
const NavJSS = withStyles(navStyles)(Nav)

NavMenuMobile.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string,
  setActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired
}

export default withStyles(styles, { injectTheme: true })(NavMenuMobile)
