import * as actions from '../actions/Interface/creators'
import config from '../../config.js'

function Interface (state = {
  pages: [actions.EXPLORER, actions.PUBLISHER, actions.WALLET, actions.AUTOPAY],
  activePage: actions.EXPLORER,
  mode: actions.DEFAULT,
  defaultRecordPage: 0,
  defaultTemplatePage: 0,
  searchedRecordPage: 0,
  searchedTemplatePage: 0,
  showOnlyVerifiedPublishers: config.showOnlyVerifiedPublishers
}, action) {
  switch (action.type) {
    case actions.SET_MODE: {
      return {
        ...state,
        mode: action.mode
      }
    }
    case actions.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.page
      }
    case actions.SET_ACTIVE_RECORD_TYPE:
      return {
        ...state,
        activeRecordType: action.recordType
      }
    case actions.SET_DEFAULT_RECORDS_PAGE:
      return {
        ...state,
        defaultRecordPage: action.pageIndex
      }
    case actions.SET_DEFAULT_TEMPLATES_PAGE:
      return {
        ...state,
        defaultTemplatePage: action.pageIndex
      }
    case actions.SET_SEARCHED_RECORDS_PAGE:
      return {
        ...state,
        searchedRecordPage: action.pageIndex
      }
    case actions.SET_SEARCHED_TEMPLATES_PAGE:
      return {
        ...state,
        searchedTemplatePage: action.pageIndex
      }
    case actions.SHOW_ONLY_VERIFIED_PUBLISHER:
      return {
        ...state,
        showOnlyVerifiedPublishers: action.showOnlyVerifiedPublishers
      }
    default:
      return state
  }
}

export default Interface
