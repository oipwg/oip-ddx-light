import { DaemonApi } from 'js-oip'
import config from '../../config.js'
import * as actions from '../actions/Explorer/creators'

const initialState = {
  daemonApi: new DaemonApi(config.daemonApiUrl),
  templateFilter: config.templateFilter,
  templateOperand: config.templateOperand,
  defaultRecordKeys: [],
  defaultTemplateKeys: [],
  searchedRecordKeys: [],
  searchedTemplateKeys: [],
  searchedRecords: {},
  searchedTemplates: {},
  defaultTemplates: {},
  defaultRecords: {},
  recordsFetching: false,
  recordsSuccess: false,
  recordsError: false,
  recordsErrorMessage: undefined,
  templatesFetching: false,
  templatesSuccess: false,
  templatesError: false,
  templatesErrorMessage: undefined
}
const Explorer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DAEMON_API: {
      return {
        ...state,
        daemonApi: action.daemon
      }
    }
    case actions.SET_DEFAULT_RECORDS:
      return {
        ...state,
        defaultRecords: {
          ...state.defaultRecords,
          [action.payload.next]: action.payload
        },
        defaultRecordKeys: [...state.defaultRecordKeys, action.payload.next]
      }
    case actions.SET_DEFAULT_TEMPLATES:
      return {
        ...state,
        defaultTemplates: {
          ...state.defaultTemplates,
          [action.payload.next]: action.payload
        },
        defaultTemplateKeys: [...state.defaultTemplateKeys, action.payload.next]
      }
    case actions.SET_SEARCHED_RECORDS: {
      return {
        ...state,
        searchedRecords: { [action.payload.next]: action.payload },
        searchedRecordKeys: [action.payload.next]
      }
    }
    case actions.SET_SEARCHED_TEMPLATES:
      return {
        ...state,
        searchedTemplates: { [action.payload.next]: action.payload },
        searchedTemplateKeys: [action.payload.next]
      }
    case actions.FETCHING_RECORDS_SUCCESS:
      return {
        ...state,
        recordsFetching: false,
        recordsError: false,
        recordsErrorMessage: null,
        recordsSuccess: true
      }
    case actions.FETCHING_RECORDS_ERROR:
      return {
        ...state,
        recordsFetching: false,
        recordsError: true,
        recordsErrorMessage: action.error,
        recordsSuccess: false
      }
    case actions.FETCHING_RECORDS:
      return {
        ...state,
        recordsFetching: true,
        recordsError: false,
        recordsErrorMessage: null,
        recordsSuccess: false
      }
    case actions.FETCHING_TEMPLATES:
      return {
        ...state,
        templatesError: false,
        templatesFetching: true,
        templatesSuccess: false,
        templatesErrorMessage: null
      }
    case actions.FETCHING_TEMPLATES_SUCCESS:
      return {
        ...state,
        templatesError: false,
        templatesFetching: false,
        templatesSuccess: true,
        templatesErrorMessage: null
      }
    case actions.FETCHING_TEMPLATES_ERROR:
      return {
        ...state,
        templatesError: true,
        templatesFetching: false,
        templatesSuccess: false,
        templatesErrorMessage: action.error
      }
    case actions.CLEAR_FETCH_STATUS:
      return {
        ...state,
        templatesError: false,
        templatesFetching: false,
        templatesSuccess: false,
        templatesErrorMessage: null,
        recordsFetching: false,
        recordsError: false,
        recordsErrorMessage: null,
        recordsSuccess: false
      }
    default:
      return state
  }
}

export default Explorer
