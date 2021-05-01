import * as types from './types';

const initialState = {
  user: undefined
}
const User = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}

export default User
