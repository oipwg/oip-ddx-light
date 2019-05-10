import { DaemonApi } from 'js-oip'
import {
  ERROR,
  SUCCESS,
  PENDING,
  NULL,
  LATEST_RECORDS_KEYS,
  LATEST_TEMPLATES_KEYS,
  SEARCHED_RECORDS_KEYS,
  SEARCHED_TEMPLATES_KEYS,
  setApiStatus,
  setStatusMessage,
  setLatestRecords,
  setLatestTemplates,
  setDaemonApi, setSearchedRecords, setSearchedTemplates, addNextKey
} from './creators'

// _exists_:record.details.tmpl_000000000000F113

export const getLatestOip5Records = () => async (dispatch, getState) => {
  const DaemonApi = getState().Explorer.daemonApi
  dispatch(setApiStatus(PENDING))
  let response
  try {
    response = await DaemonApi.getLatestOip5Records()
  } catch (err) {
    dispatch(setApiStatus(ERROR))
    dispatch(setStatusMessage(`failed to getLatestOip5Records: ${err}`))
  }
  const { success, payload } = response
  if (success) {
    dispatch(setApiStatus(SUCCESS))
    const { next } = payload
    dispatch(addNextKey(next, LATEST_RECORDS_KEYS))
    dispatch(setLatestRecords({ payload, next }))
  } else {
    dispatch(setApiStatus(NULL))
    dispatch(setStatusMessage('Response success returned false for getting latest oip5 records'))
  }
}

export const getLatestOip5Templates = () => async (dispatch, getState) => {
  const DaemonApi = getState().Explorer.daemonApi
  dispatch(setApiStatus(PENDING))
  let response
  try {
    response = await DaemonApi.getLatestOip5Templates()
  } catch (err) {
    dispatch(setApiStatus(ERROR))
    dispatch(setStatusMessage(`failed to getLatestOip5Templates: ${err}`))
  }
  const { success, payload } = response
  if (success) {
    dispatch(setApiStatus(SUCCESS))
    const { next } = payload
    dispatch(addNextKey(next, LATEST_TEMPLATES_KEYS))
    dispatch(setLatestTemplates({ payload, next }))
  } else {
    dispatch(setApiStatus(NULL))
    dispatch(setStatusMessage('Response success returned false for getting latest oip5 templates'))
  }
}

export const searchOip5Records = query => async (dispatch, getState) => {
  const DaemonApi = getState().Explorer.daemonApi
  dispatch(setApiStatus(PENDING))
  let response
  try {
    response = await DaemonApi.searchOip5Records({ q: query })
  } catch (err) {
    dispatch(setApiStatus(ERROR))
    dispatch(setStatusMessage(`failed to search Oip5 Records for: ${query} - ${err}`))
  }
  const { success, payload } = response
  if (success) {
    dispatch(setApiStatus(SUCCESS))
    const { next } = payload
    dispatch(addNextKey(next, SEARCHED_RECORDS_KEYS))
    dispatch(setSearchedRecords({ next, payload }))
  } else {
    dispatch(setApiStatus(NULL))
    dispatch(setStatusMessage(`Response success returned false for getting oip5 record: ${query}`))
  }
}

export const searchOip5Templates = query => async (dispatch, getState) => {
  const DaemonApi = getState().Explorer.daemonApi
  dispatch(setApiStatus(PENDING))
  let response
  try {
    response = await DaemonApi.searchOip5Templates({ q: query })
  } catch (err) {
    dispatch(setApiStatus(ERROR))
    dispatch(setStatusMessage(`failed to search Oip5 Templates: ${query} - ${err}`))
  }
  const { success, payload } = response
  if (success) {
    dispatch(setApiStatus(SUCCESS))
    const { next } = payload
    dispatch(addNextKey(next, SEARCHED_TEMPLATES_KEYS))
    dispatch(setSearchedTemplates({ next, payload }))
  } else {
    dispatch(setApiStatus(NULL))
    dispatch(setStatusMessage(`Response success returned false for getting oip5 template: ${query}`))
  }
}

export const createDaemonApi = (url) => dispatch => {
  const daemon = new DaemonApi(url)
  dispatch(setDaemonApi(daemon))
}
