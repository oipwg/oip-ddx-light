import * as PUBLISHER_ACTIONS from './creators'
import * as PUBLISHER_THUNKS from './thunks'

export const PublisherActions = {
  ...PUBLISHER_ACTIONS,
  ...PUBLISHER_THUNKS
}
