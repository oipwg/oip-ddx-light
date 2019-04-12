import React from 'react'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '1 1 auto',
    padding: '60px'
  }
})

const PublishPage = ({ classes, children }) => {
  return <div className={classes.root}>
    {children}
  </div>
}

export default withStyles(styles)(PublishPage)
