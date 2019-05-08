import React from 'react'
import withStyles from 'react-jss'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '1000px',
    width: '100%',
    backgroundColor: 'white',
    boxShadow: theme.shadows[2],
    boxSizing: 'border-box',
    flex: '0 0 800px'
  }
})

const TablePaper = ({ classes }) => {
  return <div className={classes.root}>
    <TableHeader />
    <TableBody />
  </div>
}

export default withStyles(styles)(TablePaper)
