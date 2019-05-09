import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import SideBar from '../dumb/SideBar'
import ExplorerContainer from '../../containers/ExplorerContainer'

const Interface = ({
  classes,
  activePage,
  setActivePage,
  pages,
  latestRecords,
  latestTemplates
}) => {
  return <div className={classes.root}>
    <SideBar
      pages={pages}
      activePage={activePage}
      setActivePage={setActivePage}
    />
    <ExplorerContainer
      latestRecords={latestRecords}
      latestTemplates={latestTemplates}
    />
  </div>
}
const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  }
}

Interface.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  latestRecords: PropTypes.object,
  latestTemplates: PropTypes.object
}

export default withStyles(styles)(Interface)
