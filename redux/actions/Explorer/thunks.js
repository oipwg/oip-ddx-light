import { DaemonApi } from 'js-oip'
import {
  ERROR,
  SUCCESS,
  PENDING,
  NULL,
  setApiStatus,
  setStatusMessage,
  setLatestRecords,
  setLatestTemplates,
  setCurrentRecord,
  setCurrentTemplate,
  cacheRecord,
  cacheTemplate,
  setDaemonApi
} from './creators'

export const getLatestOip5Records = () => async (dispatch, getState) => {
  const DaemonApi = getState().Explorer.daemonApi
  dispatch(setApiStatus(PENDING))
  let response
  try {
    response = await DaemonApi.getLatestOip5Records()
  } catch (err) {
    dispatch(setApiStatus(ERROR))
    dispatch(setStatusMessage(`failed to getLatestOip5Records: ${err}`))
    return false
  }
  const { success, payload } = response
  if (success) {
    dispatch(setApiStatus(SUCCESS))
    dispatch(setLatestRecords(payload))
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
    return false
  }
  const { success, payload } = response
  if (success) {
    dispatch(setApiStatus(SUCCESS))
    dispatch(setLatestTemplates(payload))
  } else {
    dispatch(setApiStatus(NULL))
    dispatch(setStatusMessage('Response success returned false for getting latest oip5 templates'))
  }
}

export const getOip5Record = txid => async (dispatch, getState) => {
  const DaemonApi = getState().Explorer.daemonApi
  dispatch(setApiStatus(PENDING))
  let response
  try {
    response = await DaemonApi.getOip5Record(txid)
  } catch (err) {
    dispatch(setApiStatus(ERROR))
    dispatch(setStatusMessage(`failed to getOip5Record: ${txid} - ${err}`))
    return false
  }
  const { success, payload } = response
  if (success) {
    dispatch(setApiStatus(SUCCESS))
    dispatch(setCurrentRecord(payload))
    dispatch(cacheRecord(payload))
  } else {
    dispatch(setApiStatus(NULL))
    dispatch(setStatusMessage(`Response success returned false for getting oip5 record: ${txid}`))
  }
}

export const getOip5Template = txid => async (dispatch, getState) => {
  const DaemonApi = getState().Explorer.daemonApi
  dispatch(setApiStatus(PENDING))
  let response
  try {
    response = await DaemonApi.getOip5Template(txid)
  } catch (err) {
    dispatch(setApiStatus(ERROR))
    dispatch(setStatusMessage(`failed to getOip5Template: ${txid} - ${err}`))
    return false
  }
  const { success, payload } = response
  if (success) {
    dispatch(setApiStatus(SUCCESS))
    dispatch(setCurrentTemplate(payload))
    dispatch(cacheTemplate(payload))
  } else {
    dispatch(setApiStatus(NULL))
    dispatch(setStatusMessage(`Response success returned false for getting oip5 template: ${txid}`))
  }
}

export const createDaemonApi = (url) => dispatch => {
  const daemon = new DaemonApi(url)
  dispatch(setDaemonApi(daemon))
}
