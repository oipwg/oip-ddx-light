import React, { useReducer } from 'react'
import withStyles from 'react-jss'

import Interface from './Interface'

const records = {
  RECORD: 'record',
  TEMPLATE: 'template',
  PROFILE: 'profile',
  INFLUENCER: 'influencer',
  PLATFORM: 'platform',
  PUBLISHER: 'publisher'
}

const pages = {
  EXPLORER: 'EXPLORER',
  PUBLISH: 'PUBLISH',
  WALLET: 'WALLET'
}

const PAGE_CHANGE = 'PAGE_CHANGE'

const RECORD_CHANGE = 'RECORD_CHANGE'

const PUBLISH_STATUS_UPDATE = 'PUBLISH_STATUS_UPDATE'

const SUCCESS = 'SUCCESS'

const ERROR = 'ERROR'

const PENDING = 'PENDING'

const NULL = 'NULL'

const constants = {
  pages,
  records,
  actions: { PAGE_CHANGE, RECORD_CHANGE, PUBLISH_STATUS_UPDATE },
  status: { SUCCESS, ERROR, PENDING, NULL }
}

export const DispatchCtx = React.createContext(null)
export const StateCtx = React.createContext(null)
export const ConstantCtx = React.createContext(null)

const InterfaceContainer = () => {
  const initialState = {
    activePage: pages.EXPLORER,
    activeRecord: records.RECORD,
    publishStatus: NULL
  }

  function reducer (state, action) {
    switch (action.type) {
      case PAGE_CHANGE:
        return { ...state, activePage: action.page }
      case RECORD_CHANGE:
        return { ...state, activeRecord: action.record }
      case PUBLISH_STATUS_UPDATE:
        return { ...state, publishStatus: action.status }
      default:
        throw new Error('React useReducer default failed on switch')
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleActivePageChange = (activePage) => {
    dispatch({ type: PAGE_CHANGE, page: activePage })
  }

  return <DispatchCtx.Provider value={dispatch}>
    <StateCtx.Provider value={state}>
      <ConstantCtx.Provider value={constants}>
        <Interface
          pages={pages}
          activePage={state.activePage}
          handleActivePageChange={handleActivePageChange}
          state={state}
        />
      </ConstantCtx.Provider>
    </StateCtx.Provider>
  </DispatchCtx.Provider>
}

const styles = {
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'row'
  }
}

export default withStyles(styles)(InterfaceContainer)
