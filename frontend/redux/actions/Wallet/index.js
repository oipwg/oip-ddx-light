import * as WALLET_ACTIONS from './creators'
import * as WALLET_THUNKS from './thunks'

export const WalletActions = {
  ...WALLET_ACTIONS,
  ...WALLET_THUNKS
}
