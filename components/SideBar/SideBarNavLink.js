import React from 'react'
import withStyles from 'react-jss'

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
      color: theme.palette.primary.main,
    }
  },
  pageLinkName: {}
})

const SideBarNavLink = ({
  classes,
  pageLinkName,
  handlePageLinkClick,
  key,
  activePageLink,
  theme
}) => {
  const getStyleIfActive = () => {
    if (activePageLink === pageLinkName) {
      return {
        background: theme.palette.background.main,
        color: theme.palette.primary.main
      }
    } else return {}
  }
  return <a
    key={key}
    className={classes.navItem}
    onClick={() => handlePageLinkClick(pageLinkName)}
    style={getStyleIfActive()}
  >
    <span className={classes.pageLinkName}>{pageLinkName}</span>
  </a>
}

export default withStyles(styles, {injectTheme: true})(SideBarNavLink)
