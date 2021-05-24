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

import NewsPage from '../../pages/NewsPage'
import BusinessPage from '../../pages/BusinessPage'
import EntertainmentPage from '../../pages/EntertainmentPage'
import SportsPage from '../../pages/SportsPage'
import OpinionPage from '../../pages/OpinionPage'
import TheNodePage from '../../pages/TheNodePage'


const Interface = ({
  classes,
  activePage,
  openPublisherModal
}) => {
  const explorer = activePage === 'explorer'
  //const publisher = activePage === 'publisher'
  //const wallet = activePage === 'wallet'
  const autopay = activePage === 'autopay'
  // const news = activePage === 'news'
  // const business = activePage === 'business'
  // const entertainment = activePage === 'entertainment'
  // const sports = activePage === 'sports'
  // const opinion = activePage === 'opinion'
  // const theNode = activePage === 'theNode'

  return (
    <div className={classes.root}>
      <div className={classes.banner}> Subscribe to NFT nonsense, $50 per month</div>
      <div className={classes.interfaceContent}>
        <SideBar />

        {explorer && <ExplorerContainer />}
        {/* {(openPublisherModal) && <PublisherContainer render={props => (
          <PublishModal {...props} />
        )} />}
        {(publisher) && <PublisherContainer render={props => (
          <Publisher {...props} />
        )} />} */}
        
        {/* {wallet && <WalletPage />} */}
        {autopay && <AutopayPage />}

        {/* {news && <NewsPage />}
        {business && <BusinessPage />}
        {entertainment && <EntertainmentPage />}
        {sports && <SportsPage />}
        {opinion && <OpinionPage />}
        {theNode && <TheNodePage />} */}
      </div>
    </div>
  )
}
const styles = theme => ({
  root: {

  },
  interfaceContent: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  banner: {
    position: 'relative',
    backgroundColor: 'red',
    textAlign: 'center',
    flexDirection: 'column',
    padding: '10px 0'
  },
  [`@media (max-width: ${theme.breakpoints.md}px)`]: {
    root: {
      flexDirection: 'column'
    },
  }
})

Interface.propTypes = {
  classes: PropTypes.object.isRequired,
  activePage: PropTypes.string,
  openPublisherModal: PropTypes.bool.isRequired
}

export default withStyles(styles)(Interface)
