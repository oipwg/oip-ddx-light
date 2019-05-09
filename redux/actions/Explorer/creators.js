export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'
export const PENDING = 'PENDING'
export const NULL = 'NULL'

export const SEARCH = 'SEARCH'
export const LATEST = 'LATEST'

export const LATEST_RECORDS_KEYS = 'latestRecordsNextKeys'
export const LATEST_TEMPLATES_KEYS = 'latestTemplatesNextKeys'
export const SEARCHED_RECORDS_KEYS = 'searchedRecordsNextKeys'
export const SEARCHED_TEMPLATES_KEYS = 'searchedTemplatesNextKeys'

export const SET_API_STATUS = 'SET_API_STATUS'
export const setApiStatus = (status) => ({
  type: SET_API_STATUS,
  status
})

export const SET_STATUS_MESSAGE = 'SET_STATUS_MESSAGE'
export const setStatusMessage = (statusMessage) => ({
  type: SET_STATUS_MESSAGE,
  statusMessage
})

export const RESET_STATUS = 'RESET_STATUS'
export const resetStatus = () => ({
  type: RESET_STATUS
})

export const SET_LATEST_RECORDS = 'SET_LATEST_RECORDS'
export const setLatestRecords = ({ payload, next }) => ({
  type: SET_LATEST_RECORDS,
  payload,
  next
})

export const SET_LATEST_TEMPLATES = 'SET_LATEST_TEMPLATES'
export const setLatestTemplates = ({ payload, next }) => ({
  type: SET_LATEST_TEMPLATES,
  payload,
  next
})

export const SET_SEARCHED_RECORDS = 'SET_SEARCHED_RECORDS'
export const setSearchedRecords = ({ next, payload }) => ({
  type: SET_SEARCHED_RECORDS,
  next,
  payload
})

export const SET_SEARCHED_TEMPLATES = 'SET_SEARCHED_TEMPLATES'
export const setSearchedTemplates = ({ next, payload }) => ({
  type: SET_SEARCHED_TEMPLATES,
  next,
  payload
})

export const ADD_NEXT_KEY = 'ADD_NEXT_KEY'
export const addNextKey = (nextKey, property) => ({
  type: ADD_NEXT_KEY,
  nextKey,
  property
})

export const SET_DAEMON_API = 'SET_DAEMON_API'
export const setDaemonApi = (daemon) => ({
  type: SET_DAEMON_API,
  daemon
})
