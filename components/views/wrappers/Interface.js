import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import ExplorerContainer from '../../containers/ExplorerContainer'
import SideBar from '../dumb/SideBar'
import WalletPage from '../../WalletPage'
import PublisherContainer from '../../containers/PublisherContainer'
import PublishModal from '../dumb/PublishModal'
import Publisher from './Publisher'

const Interface = ({
  classes,
  activePage,
  setActivePage,
  pages,
  openPublisherModal
}) => {
  const explorer = activePage === 'explorer'
  const wallet = activePage === 'wallet'
  return <div className={classes.root}>
    <SideBar
      pages={pages}
      activePage={activePage}
      setActivePage={setActivePage}
    />
    {explorer && <ExplorerContainer />}
    {openPublisherModal && <PublisherContainer />}
    {wallet && <WalletPage />}
  </div>
}
const styles = theme => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  [`@media (max-width: ${theme.breakpoints['md']}px)`]: {
    root: {
      flexDirection: 'column'
    }
  }
})

Interface.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string.isRequired,
  setActivePage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
  openPublisherModal: PropTypes.bool.isRequired
}

export default withStyles(styles)(Interface)
