import React, { useContext } from 'react'
import withStyles from 'react-jss'
import { ConstantCtx } from '../Interface/InterfaceContainer'
import TableNavLink from './TableNavLink'

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
  // const { records } = useContext(ConstantCtx)
  return <div className={classes.root}>
  </div>
}

export default withStyles(styles)(TableHeader)
