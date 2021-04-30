import * as USER_ACTIONS from './creators'
import * as USER_THUNKS from './thunks'

export const WalletActions = {
  ...USER_ACTIONS,
  ...USER_THUNKS
}
