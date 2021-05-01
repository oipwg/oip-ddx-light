import * as WALLET_ACTIONS from './actions'
import * as WALLET_THUNKS from './thunks'
import reducer from './reducer'

export const WalletActions = {
  ...WALLET_ACTIONS,
  ...WALLET_THUNKS
}

export default reducer