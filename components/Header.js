import React from 'react'
import withStyles from 'react-jss'

const styles = theme => ({
  headerRoot: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1 1 auto',
    backgroundColor: theme.palette.primary.darken(2.5),
    height: '70px'
  }
})

const Header = ({ classes }) => {
  return <div id='header' className={classes.headerRoot} />
}

export default withStyles(styles)(Header)
