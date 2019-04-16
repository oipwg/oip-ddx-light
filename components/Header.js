import React, { useState, useEffect } from 'react'
import withStyles from 'react-jss'
import toPascalCase from 'to-pascal-case'
import { Menu, Explore } from '@material-ui/icons'
import useWindowSize from '../hooks/useWindowSize'

const styles = theme => ({
  headerRoot: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 auto',
    backgroundColor: theme.palette.primary.darken(2.5),
    height: '70px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: [0, 40],
    color: theme.palette.background.main,
    '& #menu-icon': {
      position: 'relative'
    },
    '& svg': {
      cursor: 'pointer'
    }
  },
  menuListOpen: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    backgroundColor: theme.palette.background.main,
    color: theme.palette.text.main,
    right: 0,
    '& > li': {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: [18, 20, 15, 75],
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: theme.palette.greyscale(0.1)
      }
    }
  },
  menuListClose: {
    display: 'none'
  }
})

const Header = ({ classes, breakpoints, handleActivePageChange }) => {
  const [menuOpen, toggleMenu] = useState(false)

  const handleToggleMenu = () => {
    toggleMenu((prevState) => toggleMenu(!prevState))
  }

  const [screenWidth, setScreenWidth] = useState(undefined)
  const screenSize = useWindowSize()

  useEffect(() => {
    if (screenSize) {
      setScreenWidth(screenSize.innerWidth)
    }
    if (screenWidth > breakpoints['md']) {
      toggleMenu(false)
    }
  }, [screenSize])

  return <div id='header' className={classes.headerRoot}>
    <h1>OIP</h1>
    <div id='menu-icon' onClick={handleToggleMenu}>
      <Menu />
      <ul className={menuOpen ? classes.menuListOpen : classes.menuListClose}>
        <li
          onClick={() => handleActivePageChange('EXPLORER')}
        >Explorer</li>
        <div style={{ borderBottom: '1px solid lightgrey' }} />
        <li
          onClick={() => handleActivePageChange('PUBLISH')}
        >Publish</li>
        <div style={{ borderBottom: '1px solid lightgrey' }} />
        <li
          onClick={() => handleActivePageChange('WALLET')}
        >Wallet</li>
      </ul>
    </div>
  </div>
}

export default withStyles(styles)(Header)
