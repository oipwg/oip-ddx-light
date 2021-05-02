import * as actions from '../actions/User/creators'

const initialState = {
  displayName: undefined,
  wallet: undefined,
  id: undefined,
  wif: undefined,
  isLoggedIn: false
}
const User = (state = initialState, action) => {
  switch (action.type) {
    case actions.IS_LOGGING_IN:
      return {
        ...state
      }
    case actions.IS_LOGGED_IN:
      return {
        ...state
      }
    case actions.IS_LOGGING_OUT:
      return {
        ...state
      }
    case actions.IS_LOGGED_OUT:
      return {
        ...state
      }
    default:
      return state
  }
}

export default User
