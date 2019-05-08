import React, { useContext } from 'react'
import withStyles from 'react-jss'
import { ConstantCtx, DispatchCtx } from '../Interface/InterfaceContainer'

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
  classes,
  recordName,
  key
}) => {
  const dispatch = useContext(DispatchCtx)
  const { actions } = useContext(ConstantCtx)
  return <div className={classes.root}>
    <a
      key={key}
      className={classes.recordName}
      onClick={() => dispatch({ type: actions.RECORD_CHANGE, record: recordName })}
    >{recordName}</a>
  </div>
}

export default withStyles(styles)(TableNavLink)
