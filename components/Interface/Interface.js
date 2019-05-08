import React from 'react'
import withStyles from 'react-jss'

import { SideBar } from '../index'
import Explorer from '../Explorer/Explorer'

const Interface = ({
  classes,
  state,
  handleActivePageChange,
  pages
}) => {
  return <div className={classes.root}>
    <SideBar
      pages={pages}
      activePage={state.activePage}
      handleActivePageChange={handleActivePageChange}
    />
    <Explorer />
  </div>
}
const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  }
}

export default withStyles(styles)(Interface)
