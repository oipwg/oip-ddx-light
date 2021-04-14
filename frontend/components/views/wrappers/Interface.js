import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import ExplorerContainer from '../../containers/ExplorerContainer'
import SideBar from '../dumb/sideBar/SideBar'
import WalletPage from '../../WalletPage'
import PublisherContainer from '../../containers/PublisherContainer'
import PublishModal from '../dumb/publishModal/PublishModal'
import Publisher from './Publisher'
import AutopayPage from '../../AutopayPage'

const Interface = ({
  classes,
  activePage,
  openPublisherModal
}) => {
  const explorer = activePage === 'explorer'
  const publisher = activePage === 'publisher'
  const wallet = activePage === 'wallet'
  const autopay = activePage === 'autopay'

  return <div className={classes.root}>
    <SideBar />
    {explorer && <ExplorerContainer />}
    {(openPublisherModal) && <PublisherContainer render={props => (
      <PublishModal {...props} />
    )} />}
    {(publisher) && <PublisherContainer render={props => (
      <Publisher {...props} />
    )} />}
    {wallet && <WalletPage />}
    {autopay && <AutopayPage />}
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
  activePage: PropTypes.string,
  openPublisherModal: PropTypes.bool.isRequired
}

export default withStyles(styles)(Interface)
