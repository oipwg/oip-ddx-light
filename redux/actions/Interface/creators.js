export const EXPLORER = 'explorer'
export const PUBLISHER = 'publisher'
export const WALLET = 'wallet'

export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE'
export const setActivePage = (page) => ({
  type: SET_ACTIVE_PAGE,
  page
})

export const SET_ACTIVE_RECORD_TYPE = 'SET_ACTIVE_RECORD_TYPE'
export const setActiveRecordType = (recordType) => ({
  type: SET_ACTIVE_RECORD_TYPE,
  recordType
})
