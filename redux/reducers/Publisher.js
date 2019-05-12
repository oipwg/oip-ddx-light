import * as actions from '../actions/Publisher/creators'

function Publisher (state = {
  publishType: actions.RECORD,
  publishRecord: undefined,
  publishTemplate: undefined
}, action) {
  switch (action.type) {
    case actions.SET_PUBLISH_TYPE:
      return {
        ...state,
        publishType: action.publishType
      }
    default:
      return state
  }
}

export default Publisher
