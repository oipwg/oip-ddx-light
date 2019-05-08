import React from 'react'
import withStyles from 'react-jss'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100px',
    textTransform: 'capitalize'
  },
  recordName: {}
})

const TableNavLink = ({
  classes
}) => {
  return <div className={classes.root} />
}

export default withStyles(styles)(TableNavLink)
