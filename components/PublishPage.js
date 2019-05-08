import React from 'react'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    justifyContent: 'center'
  },
  contentContainer: {
    padding: 60,
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto'
  }
})

const PublishPage = ({ classes, children }) => {
  return <div className={classes.root}>
    <div className={classes.contentContainer}>
      {children}
    </div>
  </div>
}

export default withStyles(styles)(PublishPage)
