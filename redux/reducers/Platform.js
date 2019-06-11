import * as actions from '../actions/Platform/creators'

function Platform (state = {
  registered: false,
  platformData: {}
}, action) {
  if (action.type === actions.SET_PLATFORM_DATA) {
    return {
      ...state,
      platformData: action.platformData
    }
  }
  switch (action.type) {
    case actions.SET_PLATFORM_DATA:
      return {
        ...state,
        platformData: action.platformData
      }
    case actions.REGISTER:
      return {
        ...state,
        registered: action.registered
      }
    default:
      return state
  }
}

export default Platform
