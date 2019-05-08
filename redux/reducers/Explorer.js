import * as actions from '../actions/Explorer/creators'

function Explorer (state = {
  status: actions.NULL,
  statusMessage: '',
  latestRecords: {},
  latestTemplates: {},
  currentRecord: undefined,
  currentTemplate: undefined,
  recordCache: [],
  templateCache: []
}, action) {
  switch (action.type) {
    case actions.SET_API_STATUS:
      return {
        ...state,
        status: action.status
      }
    case actions.SET_STATUS_MESSAGE:
      return {
        ...state,
        statusMessage: action.statusMessage
      }
    case actions.RESET_STATUS:
      return {
        ...state,
        statusMessage: '',
        status: actions.NULL
      }
    case actions.SET_LATEST_RECORDS:
      return {
        ...state,
        latestRecords: action.latestRecords
      }
    case actions.SET_LATEST_TEMPLATES:
      return {
        ...state,
        latestTemplates: action.latestTemplates
      }
    case actions.SET_CURRENT_RECORD:
      return {
        ...state,
        currentRecord: action.currentRecord
      }
    case actions.SET_CURRENT_TEMPLATE:
      return {
        ...state,
        currentTemplate: action.currentTemplate
      }
    case actions.CACHE_RECORD:
      return {
        ...state,
        recordCache: [...state.recordCache, action.record]
      }
    case actions.CLEAR_RECORD_CACHE:
      return {
        ...state,
        recordCache: []
      }
    case actions.CACHE_TEMPLATE:
      return {
        ...state,
        templateCache: [...state.templateCache, action.template]
      }
    case actions.CLEAR_TEMPLATE_CACHE:
      return {
        ...state,
        templateCache: []
      }
  }
}

export default Explorer
