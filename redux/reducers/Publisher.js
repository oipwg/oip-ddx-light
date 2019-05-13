import * as actions from '../actions/Publisher/creators'

const RECORD = 'record'

const TEMPLATE = 'TEMPLATE'

function Publisher (state = {
  openPublisherModal: false,
  publishType: RECORD,
  publishSuccess: false,
  publishPending: false,
  publishError: false,
  publishErrorMessage: null
}, action) {
  switch (action.type) {
    case actions.OPEN_PUBLISHER_MODAL:
      return {
        ...state,
        openPublisherModal: true
      }
    case actions.CLOSE_PUBLISHER_MODAL:
      return {
        ...state,
        openPublisherModal: false
      }
    case actions.PUBLISH_RECORD:
      return {
        ...state,
        publishType: RECORD,
        openPublisherModal: true
      }
    case actions.PUBLISH_TEMPLATE:
      return {
        ...state,
        publishType: TEMPLATE,
        openPublisherModal: true
      }
    case actions.FORK_TEMPLATE:
      return {
        ...state,
        forkedTemplate: action.descriptorSetProto
      }
    case actions.PUBLISH_SUCCESS:
      return {
        ...state,
        publishSuccess: true,
        publishError: false,
        publishPending: false,
        publishErrorMessage: null
      }
    case actions.PUBLISH_PENDING:
      return {
        ...state,
        publishSuccess: false,
        publishError: false,
        publishPending: true,
        publishErrorMessage: null
      }
    case actions.PUBLISH_ERROR:
      return {
        ...state,
        publishSuccess: false,
        publishError: true,
        publishPending: false,
        publishErrorMessage: action.error
      }
    default:
      return state
  }
}

export default Publisher
