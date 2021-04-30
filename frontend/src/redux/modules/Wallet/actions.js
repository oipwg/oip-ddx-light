export const SET_X_WALLET = 'SET_X_WALLET'
export const setExplorerWallet = (xWallet) => ({
  type: SET_X_WALLET,
  xWallet
})

export const SET_HDMW_WALLET = 'SET_HDMW_WALLET'
export const setHdmwWallet = (hdmwWallet) => ({
  type: SET_HDMW_WALLET,
  hdmwWallet
})

export const TX_PENDING = 'TX_PENDING'
export const txPending = () => ({
  type: TX_PENDING
})

export const TX_SUCCESS = 'TX_SUCCESS'
export const txSuccess = () => ({
  type: TX_SUCCESS
})

export const TX_ERROR = 'TX_ERROR'
export const txError = (err) => ({
  type: TX_ERROR,
  errorMessage: err
})

export const CLEAR_TX_STATUS = 'CLEAR_TX_STATUS'
export const clearTxStatus = () => ({
  type: CLEAR_TX_STATUS
})

export const SET_FLO_BALANCE = 'SET_FLO_BALANCE'
export const setFloBalance = (balance) => ({
  type: SET_FLO_BALANCE,
  balance
})

export const SET_FLO_XR = 'SET_FLO_XR'
export const setFloExchangeRate = (xr) => ({
  type: SET_FLO_XR,
  xr
})

export const PURCHASE_RECORD = 'PURCHASE_RECORD'
export const purchase_record = (payload) => {
  return { 
    type: PURCHASE_RECORD,
    payload
  }
}