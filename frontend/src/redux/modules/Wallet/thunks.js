import { Networks, OIP } from 'js-oip'
import { ECPair, payments } from 'bitcoinjs-lib'
import * as bip32 from 'bip32'
import { Account, Wallet } from '@oipwg/hdmw'
import axios from 'axios'
import { decrypt } from '../../../../util/crypto'
import { updatePurchasedTxid } from '../../actions/Autopay/creators'

import {
  setFloBalance,
  setFloExchangeRate,
  txError,
  txPending,
  txSuccess,
  setExplorerWallet
} from './actions'
import getFloWif from '../../../../util/get-wif'
import { GET_BALANCE, GET_EXCHANGE_RATE, WALLET_LOADED, WALLET_LOADING } from './types'

// Todo: Set wif to the redux store

const { floMainnet, floTestnet } = Networks

const network = {
  flo_mainnet: floMainnet.network,
  flo_testnet: floTestnet.network
}
function getPubAddress (wif, useNetwork = 'mainnet') {
  console.log(wif)
  const floNetwork =
    useNetwork === 'mainnet' ? network.flo_mainnet : network.floTestnet
  const EC = ECPair.fromWIF(wif, floNetwork)
  return payments.p2pkh({ pubkey: EC.publicKey, network: floNetwork }).address
}
//! ****************************************************TIP Function **************************************************/
export const tip = ({
  paymentAddr,
  paymentTemplate,
  tipAmountSat,
  tV
}) => async (dispatch, getState) => {
  const { Wallet } = getState()
  const wallet = Wallet.xWallet
  if (!wallet) {
    console.error(
      'Failed to send tip. private key is probably not set. Wallet undefined'
    )
    return
  }
  // paymentTemplate holds the sugTip array
  // tV value is passed up from child PaymentRow depending on which button is clicked
  // If template doesnt have sugTip, it will default to .2 cents in PaymentRow

  const TIP_FIAT = tV
  console.log(`Tip amount: $${tV}`)
  const TIP_FLO_SAT = ((TIP_FIAT * 1e8) / (Wallet.floExchangeRate * 1e8)) * 1e8
  // console.log(TIP_FLO_SAT, Wallet.floExchangeRate);

  let platformAddr
  //! *************** There is currently no platform, when not using a platform we need to change this to ignore the platform cut. It is currently taking a cut
  // if (Platform.registered) {
  //   // console.log(Platform.registered, Platform.platformData.floPaymentAddress)
  //   platformAddr = Platform.platformData.floPaymentAddress;
  // }

  const amount = tipAmountSat || Math.floor(TIP_FLO_SAT)
  // console.log('amount', amount);

  let pubCut
  let pubValue
  let platformValue
  let toPlatform

  if (paymentTemplate && paymentTemplate.platformCut) {
    pubCut = (100 - paymentTemplate.platformCut) / 100
    pubValue = Math.floor(amount * pubCut)
    platformValue = Math.floor(amount * (paymentTemplate.platformCut / 100))
    toPlatform = {
      address: platformAddr,
      value: platformValue
    }
  } else pubValue = amount

  // console.log(pubCut, pubValue, platformValue)

  const toPublisher = {
    address: paymentAddr,
    value: pubValue
  }

  const outputs = [toPublisher, toPlatform]
  // console.log(outputs);
  let txid
  try {
    txid = await dispatch(sendTx(outputs))
  } catch (err) {
    console.error(err)
    return
  }

  // console.log('sent tip: ', txid)
  setTimeout(() => {
    dispatch(getBalance())
  }, 5000)
  return txid
}
//! ******************************************* END TIP Function ********************************/

export const sendTx = (outputs) => async (dispatch, getState) => {
  const { Wallet } = getState()
  const xWallet = Wallet.xWallet
  if (!xWallet) {
    console.error(
      'Failed to send transaction. private key is probably not set. Wallet undefined'
    )
    return
  }

  dispatch(txPending())
  let txid
  try {
    txid = await xWallet.sendTx(outputs)
  } catch (err) {
    dispatch(txError(err))
    throw Error(`Failed to sendTx: \n ${err}`)
  }
  dispatch(txSuccess())
  console.log('tx sent: ', txid)
  return txid
}

export const getBalance = (addr) => async (dispatch, getState) => {
  const { Wallet } = getState()
  const xWallet = Wallet.xWallet
  if (!xWallet) {
    console.error(
      'Failed to get balance. private key is probably not set. Wallet undefined'
    )
    return
  }
  const address = addr || getPubAddress(getFloWif(Wallet.hdmwWallet))
  const explorer = xWallet.explorer
  let res
  try {
    res = await explorer.getAddress(address)
  } catch (err) {
    console.error(`failed to get address from explorer: \n ${err}`)
    return
  }
  dispatch(setFloBalance(res.balanceSat))
  return res.balanceSat
}

export const getExchangeRate = () => async (dispatch, getState) => {
  const { _exchange } = getState().Wallet
  let xr
  try {
    xr = await _exchange.getExchangeRate('flo', 'usd')
  } catch (err) {
    console.log(`Failed to get exchange rate: \n ${err}`)
    return
  }
  dispatch(setFloExchangeRate(xr))
  return xr
}

export const proveRvnAsset = ({
  address,
  txid,
  terms
}) => async (dispatch, getState) => {
  if (!wallet) {
    console.error(
      'Failed to check if NFT exists. Private key is probably not set. Wallet undefined'
    )
    return
  }
  const addressBalance = await axios.get(`https://explorer-api.ravenland.org/address/${rvnAddress}/balances`)
  
  if (addressBalance.data.ALBAWABA2021 >= 1) {
    console.log("NFT balance sufficient")

    let res = await axios.get(`https://api.oip.io/oip/o5/location/request?id=${txid}&terms=${terms}`)
    const { amount, scale, asset } = res.data.results[0].record.details.tmpl_EE0D326B
    preImage = res.pre_image

    console.log("pre_image: ", preImage)
  }
}

//! ****************************************************PurchaseRecord Function **************************************************/
export const purchaseRecord = ({
  txid,
  terms
}) => async (dispatch, getState) => {
  const { Wallet } = getState()
  const wallet = Wallet.xWallet
  if (!wallet) {
    console.error(
      'Failed to send tip. private key is probably not set. Wallet undefined'
    )
    return
  }

  //await axios.get(`https://api.oip.io/oip/o5/location/request?id=${txid}&terms=${terms}`)

  //const { valid_until, pre_image } = response.data

  const res = await axios.get(`https://api.oip.io/oip/o5/record/get/${txid}`)

  const { amount, scale, destination } = res.data.results[0].record.details.tmpl_DE84D583

  const paymentAddr = destination

  console.log('PURCHASE REFCORD!')
  // eslint-disable-next-line camelcase
  let payment_txid

  try {
    const output = {
      address: paymentAddr,
      value: (amount/scale * 1e8) // satoshis
    }

    // eslint-disable-next-line camelcase
    payment_txid = await dispatch(sendTx(output))

    const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    await sleep(2000)
  } catch (err) {
    console.error(err)
    return { error: err }
  }

  return dispatch(updatePurchasedTxid({ txid, payment_txid, terms }))

  // setTimeout(() => {
  //   dispatch(getBalance());
  // }, 5000);
}

// todo: To grab previous purchases:  find amd search addresses from commercial content; in wallet's transactions if so, grab the txid. push that into...
// the global state.autoPay.purchased.
// UseEffect will call proofOfPurchase and take care of the rest.

export const proofOfPurchase = ({
  // eslint-disable-next-line camelcase
  payment_txid,
  txid,
  terms
}) => async (dispatch, getState) => {
  const { Wallet } = getState()
  const wallet = Wallet.xWallet
  if (!wallet) {
    console.error(
      'Failed to send tip. private key is probably not set. Wallet undefined'
    )
    return
  }

  const response = await axios.get(`https://api.oip.io/oip/o5/location/request?id=${txid}&terms=${terms}`)

  // eslint-disable-next-line camelcase
  const { valid_until, pre_image } = response.data

  const signature = wallet.signMessage(pre_image)
  const publicAddress = getPubAddress(getFloWif(Wallet.hdmwWallet))

  const body = { valid_until, id: txid, term: terms, pre_image, signature, payment_txid, signing_address: publicAddress }

  try {
    const res = await axios.post(`https://api.oip.io/oip/o5/location/proof?id=${txid}&terms=${terms}`, body)

    // res.data is the json object returned, giving the location of the unlocked record: 
    return res.data
  } catch (error) {
    console.log(error)
  }
}
//! ****************************************************END PurchaseRecord Function **************************************************/

export const loadWallet = (encryptedMnemonic, password) => async dispatch => {
  dispatch({ type: WALLET_LOADING })

  const mnemonic = decrypt(encryptedMnemonic, password)

  const getWallet = new Wallet(mnemonic, { supported_coins: ['flo', 'raven', 'bitcoin'] })

  const flo = getWallet.getCoin('flo')
  const bitcoin = getWallet.getCoin('bitcoin')
  const raven = getWallet.getCoin('raven')

  const coins = [flo, bitcoin, raven]

  let account1 = {
    flo: 0,
    bitcoin: 0,
    raven: 0
  }

  account1 = coins.map(async (coin) => {
    const account = coin.getAccount(1)
    const prv = account.getExtendedPrivateKey()
    const accountM = new Account(bip32.fromBase58(prv, Networks[coin.coin.name].network), Networks[coin.coin.name], false)
    accountM.discoverChains()
    return { [coin.coin.name]: await accountM.getBalance() }
  })

  await Promise.all(account1).then((val) => {
    val.reduce((result, current) => {
      return Object.assign((result, current), {})
    })
  })

  dispatch({
    type: WALLET_LOADED,
    payload: getWallet
  })

  getWallet.getCoinBalances().then(res => {
    dispatch({
      type: GET_BALANCE,
      payload: res
    })
  })

  getWallet.getExchangeRates(['flo', 'bitcoin', 'raven'], 'usd').then(res =>
    dispatch({
      type: GET_EXCHANGE_RATE,
      payload: res
    })
  )
}

export const getBalanceWallet = (wallet) => dispatch => {
  wallet.getCoinBalances({ discover: true }).then(res => {
    dispatch({
      type: GET_BALANCE,
      payload: res
    })
  })
}

export const initExplorerWallet = ({ privatekey, network, options }) => dispatch => {
  const explorerWallet = new OIP(privatekey, network, options).wallet
  dispatch(setExplorerWallet(explorerWallet))
}

// export const initHDMWWallet = (mnemonic) => dispatch => {
//   const hdmwWallet = new HDMW(mnemonic)
//   dispatch(setHdmwWallet(hdmwWallet))
// }
