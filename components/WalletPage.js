import React from 'react'
import withStyles from 'react-jss'
import { ModuleWallet } from 'oip-react'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 40px'
  }
})
const WalletPage = ({ classes }) => {
  return <div className={classes.root}>
    <ModuleWallet
      coins={['flo', 'flo_testnet']}
      height={'400px'}
      weidth={'900px'}
      borderRadius={'20px'}
    />
  </div>
}

export default withStyles(styles)(WalletPage)
