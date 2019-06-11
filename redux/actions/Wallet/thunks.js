import config from '../../../config'
import { setFloBalance, setFloExchangeRate, txError, txPending, txSuccess } from './creators'

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
  const TIP_FIAT = 0.05
  const TIP_FIAT_FLO = (TIP_FIAT * Wallet.floExchangeRate).toFixed(8)
  const TIP_FLO_SAT = TIP_FIAT_FLO * 1e8

  let platformAddr
  if (Platform.registered) {
    platformAddr = Platform.platformData.floPaymentAddress
  }

  let amount = tipAmountSat || Math.floor(TIP_FLO_SAT)

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


  const toPublisher = {
    address: paymentAddr,
    value: pubValue
  }

  let outputs = [toPublisher, toPlatform]
  let txid
  try {
    txid = await dispatch(sendTx(outputs))
  } catch (err) {
    console.error(err)
    return
  }

  dispatch(getBalance())
  return txid
}

export const sendTx = (outputs) => async (dispatch, getState) => {
  const { Wallet } = getState()
  if (config.privatekey === '' || !config.privatekey) {
    console.error('failed to send tx. private key not set')
    return
  }
  let xWallet = Wallet.xWallet

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
  if (config.privatekey === '' || !config.privatekey) {
    console.error('failed to get address from explorer. private key not set')
    return
  }
  let address = addr || config.pubKeyHash
  let explorer = Wallet.xWallet.explorer
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
