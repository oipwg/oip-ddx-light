import * as actions from '../actions/Interface/creators'

function Interface (state = {
  pages: [actions.EXPLORER, actions.PUBLISHER, actions.WALLET],
  activePage: actions.EXPLORER,
  mode: actions.LATEST,
  defaultRecordsPage: 0,
  defaultTemplatesPage: 0,
  searchedRecordsPage: 0,
  searchedTemplatesPages: 0
}, action) {
  switch (action.type) {
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
        defaultRecordsPage: action.pageIndex
      }
    case actions.SET_DEFAULT_TEMPLATES_PAGE:
      return {
        ...state,
        defaultTemplatesPage: action.pageIndex
      }
    case actions.SET_SEARCHED_RECORDS_PAGE:
      return {
        ...state,
        searchedRecordsPage: action.pageIndex
      }
    case actions.SET_SEARCHED_TEMPLATES_PAGE:
      return {
        ...state,
        searchedTemplatesPages: action.pageIndex
      }
    default:
      return state
  }
}

export default Interface
