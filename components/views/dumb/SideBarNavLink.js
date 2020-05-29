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
  },
  fiatPrice: {
    marginLeft: 10
  }
})

const SideBarNavLink = ({
  classes,
  page,
  setActivePage,
  key,
  activePage,
  theme,
  floExchangeRate,
  floBalanceSat
}) => {
  const getStyleIfActive = () => {
    if (activePage === page) {
      return {
        background: theme.palette.background.main,
        color: theme.palette.primary.main
      }
    } else return {}
  }
  let floDec = floBalanceSat / 1e8
  let fiat = (floDec * floExchangeRate).toFixed(2)
  const wallet = page === 'wallet'

  let displayName
  if (page === 'publisher') {
    displayName = 'New Record Template'
  } else if (page === 'explorer') {
    displayName = 'Explorers'
  } else if (page === 'autopay') {
    displayName = 'Autopay'
  } else displayName = page

  return <a
    key={key}
    className={classes.navItem}
    onClick={() => setActivePage(page)}
    style={getStyleIfActive()}
  >
    <span className={classes.pageLinkName}>{displayName}</span>
    {wallet && <span className={classes.fiatPrice}>${fiat}</span>}
  </a>
}

SideBarNavLink.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  activePage: PropTypes.string,
  setActivePage: PropTypes.func.isRequired,
  page: PropTypes.string.isRequired
}

export default withStyles(styles, { injectTheme: true })(SideBarNavLink)
