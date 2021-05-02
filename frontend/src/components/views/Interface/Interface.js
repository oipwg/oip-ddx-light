import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'react-jss'

import ExplorerContainer from '../Explorer/ExplorerContainer'
import SideBar from '../../library/SideBar/SideBar'
import WalletPage from '../../pages/WalletPage'
import PublisherContainer from '../Publisher/PublisherContainer'
import PublishModal from '../../library/PublishModal/PublishModal'
import Publisher from '../Publisher/Publisher'
import AutopayPage from '../../pages/AutopayPage'

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
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
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
