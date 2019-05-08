import React from 'react'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flex: '0 0 90px',
    padding: '15px',
    alignItems: 'center'
  }
})

const TableHeader = ({ classes }) => {
  return <div className={classes.root} />
}

export default withStyles(styles)(TableHeader)
