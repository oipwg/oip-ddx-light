import React from 'react'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    padding: '0px 20px'

  }
})

const TableBody = ({ classes }) => {
  return <div className={classes.root}>

  </div>
}

export default withStyles(styles)(TableBody)
