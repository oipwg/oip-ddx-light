import React from 'react'
import withStyles from 'react-jss'
import PropTypes from 'prop-types'

const styles = theme => ({
  navItem: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 44px',
    color: theme.palette.background.main,
    alignItems: 'center',
    fontWeight: 'bold',
    paddingLeft: '20px',
    fontSize: '14px',
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.background.main,
      color: theme.palette.primary.main
    }
  },
  pageLinkName: {
    textTransform: 'capitalize'
  }
})

const SideBarNavLink = ({
  classes,
  page,
  setActivePage,
  key,
  activePage,
  theme
}) => {
  const getStyleIfActive = () => {
    if (activePage === page) {
      return {
        background: theme.palette.background.main,
        color: theme.palette.primary.main
      }
    } else return {}
  }
  return <a
    key={key}
    className={classes.navItem}
    onClick={() => setActivePage(page)}
    style={getStyleIfActive()}
  >
    <span className={classes.pageLinkName}>{page}</span>
  </a>
}

SideBarNavLink.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
}

export default withStyles(styles, {injectTheme: true})(SideBarNavLink)
