import { Networks } from 'js-oip'
import { ECPair, payments } from 'bitcoinjs-lib'
import config from '../../../config'
import { setFloBalance, setFloExchangeRate, txError, txPending, txSuccess } from './creators'

const { floMainnet, floTestnet } = Networks

const network = {
  flo_mainnet: floMainnet.network,
  flo_testnet: floTestnet.network
}
function getPubAddress (wif, useNetwork = 'mainnet') {
  let floNetwork = useNetwork === 'mainnet' ? network.flo_mainnet : network.floTestnet
  const EC = ECPair.fromWIF(wif, floNetwork)
  return payments.p2pkh({ pubkey: EC.publicKey, network: floNetwork }).address
}

export const tip = ({
  paymentAddr,
  paymentTemplate,
  tipAmountSat
}) => async (dispatch, getState) => {
  const { Platform, Wallet } = getState()
  const wallet = Wallet.xWallet
  if (!wallet) {
    console.error(`Failed to send tip. private key probably is set. Wallet undefined`)
    return
  }
  console.log(paymentAddr, paymentTemplate, tipAmountSat)
  const TIP_FIAT = 0.02
  const TIP_FLO_SAT = (TIP_FIAT * 1e8) / (Wallet.floExchangeRate * 1e8) * 1e8
  // console.log(TIP_FLO_SAT, Wallet.floExchangeRate)

  let platformAddr
  if (Platform.registered) {
    // console.log(Platform.registered, Platform.platformData.floPaymentAddress)
    platformAddr = Platform.platformData.floPaymentAddress
  }

  let amount = tipAmountSat || Math.floor(TIP_FLO_SAT)
  // console.log('amount', amount)

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

  let outputs = [toPublisher, toPlatform]
  // console.log(outputs)
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

export const sendTx = (outputs) => async (dispatch, getState) => {
  const { Wallet } = getState()
  const xWallet = Wallet.xWallet
  if (!xWallet) {
    console.error(`Failed to send tip. private key probably is set. Wallet undefined`)
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
    console.error(`Failed to send tip. private key probably is set. Wallet undefined`)
    return
  }
  let address = addr || getPubAddress(config.privatekey)
  let explorer = xWallet.explorer
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
