export const SET_PLATFORM_DATA = 'SET_PLATFORM_DATA'
export const setPlatformData = (platformData) => ({
  type: SET_PLATFORM_DATA,
  platformData
})

export const REGISTER = 'REGISTER'
export const registerPlatform = (registered) => ({
  type: REGISTER,
  registered
})
