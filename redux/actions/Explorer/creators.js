export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'
export const PENDING = 'PENDING'
export const NULL = 'NULL'

export const LATEST_RECORDS_KEYS = 'defaultRecordKeys'
export const LATEST_TEMPLATES_KEYS = 'defaultTemplateKeys'
export const SEARCHED_RECORDS_KEYS = 'searchedRecordsKeys'
export const SEARCHED_TEMPLATES_KEYS = 'searchedTemplatesKeys'


export const FETCHING_RECORDS = 'FETCHING_RECORDS'
export const fetchingRecords = () => ({
  type: FETCHING_RECORDS
})

export const FETCHING_RECORDS_SUCCESS = 'FETCHING_RECORDS_SUCCESS'
export const fetchingRecordsSuccess = () => ({
  type: FETCHING_RECORDS_SUCCESS
})

export const FETCHING_RECORDS_ERROR = 'FETCHING_RECORDS_ERROR'
export const fetchingRecordsError = (error) => ({
  type: FETCHING_RECORDS_ERROR,
  error
})

export const SET_DEFAULT_RECORDS = 'SET_DEFAULT_RECORDS'
export const setDefaultRecords = (payload) => ({
  type: SET_DEFAULT_RECORDS,
  payload
})

export const FETCHING_TEMPLATES = 'FETCHING_TEMPLATES'
export const fetchingTemplates = () => ({
  type: FETCHING_TEMPLATES
})

export const FETCHING_TEMPLATES_SUCCESS = 'FETCHING_TEMPLATES_SUCCESS'
export const fetchingTemplatesSuccess = () => ({
  type: FETCHING_TEMPLATES_SUCCESS
})

export const FETCHING_TEMPLATES_ERROR = 'FETCHING_TEMPLATES_ERROR'
export const fetchingTemplatesError = (error) => ({
  type: FETCHING_TEMPLATES_ERROR,
  error
})

export const SET_DEFAULT_TEMPLATES = 'SET_DEFAULT_TEMPLATES'
export const setDefaultTemplates = (payload) => ({
  type: SET_DEFAULT_TEMPLATES,
  payload
})

export const SET_SEARCHED_RECORDS = 'SET_SEARCHED_RECORDS'
export const setSearchedRecords = (payload ) => ({
  type: SET_SEARCHED_RECORDS,
  payload
})

export const SET_SEARCHED_TEMPLATES = 'SET_SEARCHED_TEMPLATES'
export const setSearchedTemplates = (payload) => ({
  type: SET_SEARCHED_TEMPLATES,
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

export const CLEAR_FETCH_STATUS = 'CLEAR_FETCH_STATUS'
export const clearFetchStatus = () => ({
  type: CLEAR_FETCH_STATUS
})