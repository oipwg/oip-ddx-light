import { OIP } from 'js-oip'
import Exchange from '@oipwg/exchange-rate'

import config from '../../../config'
import * as actions from './actions'

let explorerWallet
// if statement below should not exist since user should not be putting private key in .env file
// instead, when logging in, the user should have a wallet created automatically, and data pulled from there
if (config.privatekey) {
  explorerWallet = new OIP(config.privatekey, config.network, { explorerUrl: config.explorerUrl }).wallet
}

const initialState = {
  //xWallet: explorerWallet, --- edited by truedev
  xWallet: undefined,
  hdmwWallet: undefined,
  _exchange: new Exchange(),
  txPending: false,
  txSuccess: false,
  txError: false,
  txErrorMessage: undefined,
  floBalanceSat: undefined,
  floExchangeRate: undefined
}
const Wallet = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_X_WALLET: {
      return {
        ...state,
        xWallet: action.xWallet
      }
    }
    case actions.SET_HDMW_WALLET: {
      return {
        ...state,
        hdmwWallet: action.hdmwWallet
      }
    }
    case actions.TX_PENDING:
      return {
        ...state,
        txPending: true,
        txSuccess: false,
        txError: false,
        txErrorMessage: null
      }
    case actions.TX_SUCCESS:
      return {
        ...state,
        txPending: false,
        txSuccess: true,
        txError: false,
        txErrorMessage: null
      }
    case actions.TX_ERROR:
      return {
        ...state,
        txPending: false,
        txSuccess: false,
        txError: true,
        txErrorMessage: action.errorMessage
      }
    case actions.CLEAR_TX_STATUS:
      return {
        ...state,
        txPending: false,
        txSuccess: false,
        txError: null,
        txErrorMessage: false
      }
    case actions.SET_FLO_BALANCE:
      return {
        ...state,
        floBalanceSat: action.balance
      }
    case actions.SET_FLO_XR:
      return {
        ...state,
        floExchangeRate: action.xr
      }
    default:
      return state
  }
}

export default Wallet
