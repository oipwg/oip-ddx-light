export const EXPLORER = 'explorer'
export const PUBLISHER = 'publisher'
export const WALLET = 'wallet'
export const AUTOPAY = 'autopay'

export const SEARCH = 'SEARCH'
export const DEFAULT = 'DEFAULT'

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

export const SET_MODE = 'SET_MODE'
export const setMode = mode => ({
  type: SET_MODE,
  mode
})

export const SET_DEFAULT_RECORDS_PAGE = 'SET_DEFAULT_RECORDS_PAGE'
export const setDefaultRecordsPage = (pageIndex) => ({
  type: SET_DEFAULT_RECORDS_PAGE,
  pageIndex
})

export const SET_DEFAULT_TEMPLATES_PAGE = 'SET_DEFAULT_TEMPLATES_PAGE'
export const setTemplatesPage = (pageIndex ) => ({
  type: SET_DEFAULT_TEMPLATES_PAGE,
  pageIndex
})

export const SET_SEARCHED_RECORDS_PAGE = 'SET_SEARCHED_RECORDS_PAGE'
export const setSearchedRecordsPage = (pageIndex) => ({
  type: SET_SEARCHED_RECORDS_PAGE,
  pageIndex
})

export const SET_SEARCHED_TEMPLATES_PAGE = 'SET_SEARCHED_TEMPLATES_PAGE'
export const setSearchedTemplatesPage = (pageIndex ) => ({
  type: SET_SEARCHED_TEMPLATES_PAGE,
  pageIndex
})

export const SHOW_ONLY_VERIFIED_PUBLISHER = 'SHOW_ONLY_VERIFIED_PUBLISHER'
export const toggleVerifiedPublishers = (showOnlyVerifiedPublishers) => ({
  type: SHOW_ONLY_VERIFIED_PUBLISHER,
  showOnlyVerifiedPublishers
})
