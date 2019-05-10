import { DaemonApi } from 'js-oip'
import config from '../../config'
import * as actions from '../actions/Explorer/creators'

const initialState = {
  daemonApi: new DaemonApi(config.daemonApiUrl),
  templateFilter: config.templateFilter,
  templateOperand: config.templateOperand,
  status: actions.NULL,
  statusMessage: '',
  latestRecordsNextKeys: [],
  latestTemplatesNextKeys: [],
  searchedRecordsNextKeys: [],
  searchedTemplatesNextKeys: [],
  activeLatestRecordsPage: 0,
  activeLatestTemplatesPage: 0,
  activeSearchedRecordsPage: 0,
  activeSearchedTemplatesPages: 0,
  latestRecords: {},
  latestTemplates: {},
  searchedRecords: {},
  searchedTemplates: {},
  mode: actions.LATEST
}
const Explorer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_DAEMON_API: {
      return {
        ...state,
        daemonApi: action.daemon
      }
    }
    case actions.SET_MODE:
      return {
        ...state,
        mode: action.mode
      }
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
        latestRecords: {
          ...state.latestRecords,
          [action.next]: action.payload
        }
      }
    case actions.SET_LATEST_TEMPLATES:
      return {
        ...state,
        latestTemplates: {
          ...state.latestTemplates,
          [action.next]: action.payload
        }
      }
    case actions.SET_SEARCHED_RECORDS: {
      return {
        ...state,
        searchedRecords: {
          ...state.searchedRecords,
          [action.next]: action.payload
        }
      }
    }
    case actions.SET_SEARCHED_TEMPLATES:
      return {
        ...state,
        searchedTemplates: {
          ...state.searchedTemplates,
          [action.next]: action.payload
        }
      }
    case actions.ADD_NEXT_KEY:
      return {
        ...state,
        [action.property]: [...state[action.property], action.nextKey]
      }
    case actions.SET_ACTIVE_PAGE:
      return {
        ...state,
        [action.property]: action.pageIndex
      }
    default:
      return state
  }
}

export default Explorer
