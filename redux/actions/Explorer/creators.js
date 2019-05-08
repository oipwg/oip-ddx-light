export const ERROR = 'ERROR'
export const SUCCESS = 'SUCCESS'
export const PENDING = 'PENDING'
export const NULL = 'NULL'

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
export const setLatestRecords = (latestRecords) => ({
  type: SET_LATEST_RECORDS,
  latestRecords
})

export const SET_LATEST_TEMPLATES = 'SET_LATEST_TEMPLATES'
export const setLatestTemplates = (latestTemplates) => ({
  type: SET_LATEST_TEMPLATES,
  latestTemplates
})

export const SET_CURRENT_RECORD = 'SET_CURRENT_RECORD'
export const setCurrentRecord = (currentRecord) => ({
  type: SET_CURRENT_RECORD,
  currentRecord
})

export const SET_CURRENT_TEMPLATE = 'SET_CURRENT_TEMPLATE'
export const setCurrentTemplate = (currentTemplate) => ({
  type: SET_CURRENT_TEMPLATE,
  currentTemplate
})

export const CACHE_RECORD = 'CACHE_RECORD'
export const cacheRecord = (record) => ({
  type: CACHE_RECORD,
  record
})

export const CLEAR_RECORD_CACHE = 'CLEAR_RECORD_CACHE'
export const clearRecordCache = () => ({
  type: CLEAR_RECORD_CACHE
})

export const CACHE_TEMPLATE = 'CACHE_TEMPLATE'
export const cacheTemplate = (template) => ({
  type: CACHE_TEMPLATE,
  template
})

export const CLEAR_TEMPLATE_CACHE = 'CLEAR_TEMPLATE_CACHE'
export const clearTemplateCache = () => ({
  type: CLEAR_TEMPLATE_CACHE
})


