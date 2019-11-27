import { DaemonApi } from 'js-oip'
import {
  setDaemonApi,
  fetchingRecords,
  fetchingRecordsSuccess,
  fetchingRecordsError,
  setDefaultRecords,
  fetchingTemplates,
  fetchingTemplatesSuccess,
  setDefaultTemplates,
  fetchingTemplatesError, setSearchedRecords, setSearchedTemplates
} from './creators'

// _exists_:record.details.tmpl_000000000000F113

const EXISTS = '_exists_'
const limit = 100
const sort = `meta.time:d`

export const applyTemplateFilter = query => (_, getState) => {
  const { templateFilter, templateOperand } = getState().Explorer

  if (templateFilter.length === 0) {
    return query
  }
  let queryArray = []
  for (let template of templateFilter) {
    let tmpFilter = `${EXISTS}:record.details.${template}`
    queryArray.push(tmpFilter)
  }
  let queryString = queryArray.join(` ${templateOperand} `)
  if (query) {
    queryString = `(${queryString}) AND ${query}`
  }
  return queryString
}

export const getDefaultRecords = query => async dispatch => {
  dispatch(fetchingRecords())
  let response
  try {
    response = await dispatch(getOip5Records(query))
  } catch (err) {
    dispatch(fetchingRecordsError(err.message))
    return { success: false, error: err.message, results: [] }
  }
  const { success, error, payload } = response
  if (success) {
    dispatch(fetchingRecordsSuccess())
    dispatch(setDefaultRecords(payload))
  } else {
    dispatch(fetchingRecordsError(error))
  }
  return payload
}

export const searchRecords = query => async dispatch => {
  dispatch(fetchingRecords())
  let response
  try {
    response = await dispatch(getOip5Records(query))
  } catch (err) {
    dispatch(fetchingRecordsError(err.message))
    return { success: false, error: err.message, results: [] }
  }
  const { success, error, payload } = response
  if (success) {
    dispatch(fetchingRecordsSuccess())
    dispatch(setSearchedRecords(payload))
  } else {
    dispatch(fetchingRecordsError(error))
  }
  return payload
}

export const getOip5Records = query => async (dispatch, getState) => {
  const { templateFilter, daemonApi } = getState().Explorer
  // if query or filter, search artifacts
  if (query || templateFilter.length > 0) {
    let q = dispatch(applyTemplateFilter(query))
    try {
      return daemonApi.searchOip5Records({ q, limit, sort })
    } catch (err) {
      throw Error(err)
    }
    // else if filter get filtered records
  } else {
    try {
      return daemonApi.getLatestOip5Records({ limit, sort })
    } catch (err) {
      throw new Error(err)
    }
  }
}

export const searchTemplates = query => async dispatch => {
  dispatch(fetchingTemplates())
  let response
  try {
    response = await dispatch(getOip5Templates(query))
  } catch (err) {
    dispatch(fetchingTemplatesError(err.message))
    return { success: false, error: err.message, results: [] }
  }
  const { success, error, payload } = response
  if (success) {
    dispatch(fetchingTemplatesSuccess())
    dispatch(setSearchedTemplates(payload))
  } else {
    dispatch(fetchingTemplatesError(error))
  }
  return payload
}

export const getDefaultTemplates = query => async dispatch => {
  dispatch(fetchingTemplates())
  let response
  try {
    response = await dispatch(getOip5Templates(query))
  } catch (err) {
    dispatch(fetchingTemplatesError(err.message))
    return { success: false, error: err.message, results: [] }
  }
  const { success, error, payload } = response
  if (success) {
    dispatch(fetchingTemplatesSuccess())
    dispatch(setDefaultTemplates(payload))
  } else {
    dispatch(fetchingTemplatesError(error))
  }
  return payload
}

export const getOip5Templates = query => async (dispatch, getState) => {
  const { daemonApi } = getState().Explorer

  // if query or filter, search artifacts
  if (query) {
    try {
      return daemonApi.searchOip5Templates({ q: query, limit, sort })
    } catch (err) {
      throw Error(err)
    }
    // else if filter get filtered records
  } else {
    try {
      return daemonApi.getLatestOip5Templates({ limit, sort })
    } catch (err) {
      throw Error(err)
    }
  }
}

export const createDaemonApi = (url) => dispatch => {
  const daemon = new DaemonApi(url)
  dispatch(setDaemonApi(daemon))
}
