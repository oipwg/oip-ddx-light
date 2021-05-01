export const IS_LOGGING_IN = 'IS_LOGGING_IN'
export const isLoggingIn = () => ({
  type: IS_LOGGING_IN
})

export const IS_LOGGED_IN = 'IS_LOGGED_IN'
export const isLoggedIn = (user) => ({
  type: IS_LOGGED_IN,
  payload: user
})

export const IS_LOGGING_OUT = 'IS_LOGGING_OUT'
export const isLoggingOut = () => ({
  type: IS_LOGGING_OUT
})

export const IS_LOGGED_OUT = 'IS_LOGGED_OUT'
export const isLoggedOut = () => ({
  type: IS_LOGGED_OUT
})

export const IS_SIGNING_UP = 'IS_SIGNING_UP'
export const isSigningUp = () => ({
  type: IS_SIGNING_UP
})

export const IS_SIGNED_UP = 'IS_SIGNED_UP'
export const isSignedUp = () => ({
  type: IS_SIGNED_UP
})
