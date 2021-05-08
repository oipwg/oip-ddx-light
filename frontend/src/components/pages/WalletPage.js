import React from 'react'
import withStyles from 'react-jss'
import { ModuleWallet } from 'oip-react'
import config from '../../../config'

const BACKEND_API_URL = config.backendApiUrl;

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

  const onCoilLogin = async () => {
    try {
      console.log("button clicked")
      const response = await fetch(`${BACKEND_API_URL}/api/users/coilLogin`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data = await response.text();
      console.log(data)

      location.assign(data)

      //const access_token = new URLSearchParams(document.location.search.substring(1)).get("code")
      //console.log(access_token)

    } catch (err) {
      console.log("onLogin error" + err);
    }
  }

  const coilAuthenticated = async () => {
    const url = window.location
    const params = new URLSearchParams(document.location.search.substring(1)).get("code")
    console.log(access_token)
  }

  return <div className={classes.root}>
    <div>
      <div className={classes.walletWrapper}>
        <ModuleWallet
          coins={['flo', 'floTestnet']}
          height={'400px'}
          width={'900px'}
          borderRadius={'20px'}
        />
      </div>
      <button
        onClick={onCoilLogin}
      >
        Sign into Coil
      </button>

      <button
        onClick={coilAuthenticated}
      >
        URL button
      </button>
      </div>
    </div>
}

export default withStyles(styles)(WalletPage)
