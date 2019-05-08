import React from 'react'
import withStyles from 'react-jss'
import TablePaper from './TablePaper'

const styles = theme => ({
  root: {
    display: 'flex',
    flex: '0 0 calc(100% - 180px)',
    alignItems: 'center',
    flexDirection: 'row'
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    padding: '0px 70px'
  }
})

const Explorer = ({ classes }) => {
  return <div className={classes.root}>
    <div className={classes.wrapper}>
      <TablePaper />
    </div>
  </div>
}

export default withStyles(styles)(Explorer)
