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
    padding: '0px 40px',
    overflowX: 'auto'
  },
  walletWrapper: {
    display: 'flex',
    borderRadius: '20px',
    boxShadow: '1px 1px 3px',
    marginBottom: '108px'
  }
})
const WalletPage = ({ classes }) => {
  return <div className={classes.root}>
    <div className={classes.walletWrapper}>
      <ModuleWallet
        coins={['flo', 'floTestnet']}
        height={'400px'}
        width={'900px'}
        borderRadius={'20px'}
      />
    </div>
  </div>
}

export default withStyles(styles)(WalletPage)
