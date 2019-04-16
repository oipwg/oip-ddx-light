import React, { useState } from 'react'
import withStyles from 'react-jss'
import bip39 from 'bip39'

import { LoadWallet, WalletInterface } from '../index'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

const WalletContainer = ({ classes, initWallet, wallet }) => {
  const [mnemonic, setMnemonic] = useState('')

  function handleMnemonic (e) {
    setMnemonic(e.target.value)
  }

  function validateMnemonic () {
    if (!bip39.validateMnemonic(mnemonic)) {
      window.alert(`invalid mnemonic`)
      return false
    }
    initWallet(mnemonic)
  }

  return <div className={classes.root}>
    {wallet ? <WalletInterface wallet={wallet} />
      : <LoadWallet
        handleMnemonic={handleMnemonic}
        validateMnemonic={validateMnemonic}
      />
    }

  </div>
}

export default withStyles(styles)(WalletContainer)
