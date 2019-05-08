import * as EXPLORER_ACTIONS from './creators'
import * as EXPLORER_THUNKS from './thunks'

export const ExplorerActions = {
  ...EXPLORER_ACTIONS,
  ...EXPLORER_THUNKS
}
