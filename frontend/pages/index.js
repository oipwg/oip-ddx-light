import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import config from '../config.js'
import InterfaceContainer from '../components/containers/InterfaceContainer'

import {
  fetchingRecordsError,
  fetchingTemplatesError,
  setDefaultRecords,
  setDefaultTemplates
} from '../redux/actions/Explorer/creators'
import { getDefaultRecords, getDefaultTemplates } from '../redux/actions/Explorer/thunks'
import { getBalance, getExchangeRate } from '../redux/modules/Wallet/thunks'
import useRegisterPlatform from '../helpers/hooks/useRegisterPlatform'
import { registerPlatform, setPlatformData } from '../redux/actions/Platform/creators'

const Index = ({
  defaultRecords,
  defaultTemplates,
  setDefaultRecords,
  setDefaultTemplates,
  fetchingRecordsError,
  fetchingTemplatesError,
  getExchangeRate,
  getBalance,
  daemonApi,
  setPlatformData,
  registerPlatform
}) => {
  const { registered, platformData } = useRegisterPlatform({
    txid: config.platformRegistrationTxid,
    daemon: daemonApi
  })
  useEffect(() => {
    let current = true
    if (current) {
      if (registered) {
        registerPlatform(registered)
        setPlatformData(platformData)
      }
    }
    return () => {
      current = false
    }
  }, [registered, platformData])

  useEffect(() => {
    let current = true
    if (defaultRecords) {
      const { error } = defaultRecords
      if (current) {
        if (error) {
          fetchingRecordsError(error)
        } else setDefaultRecords(defaultRecords)
      }
    }
    if (defaultTemplates) {
      const { error } = defaultTemplates
      if (current) {
        if (error) {
          fetchingTemplatesError(error)
        } else setDefaultTemplates(defaultTemplates)
      }
    }
    return () => {
      current = false
    }
  }, [])

  // get flo balance and exchange rate
  useEffect(() => {
    let current = true
    const getXrAndBalance = async () => {
      if (current) {
        await getExchangeRate()
        await getBalance()
      }
    }
    getXrAndBalance()
    return () => {
      current = false
    }
  }, [])

  return <InterfaceContainer />
}

Index.getInitialProps = async (ctx) => {
  const { req, reduxStore } = ctx
  const { dispatch } = reduxStore
  const isServer = !!req

  // this is a part of render blocking I think
  const recordsPayload = await dispatch(getDefaultRecords())
  const templatesPayload = await dispatch(getDefaultTemplates())

  if (isServer) {
    return {
      defaultRecords: recordsPayload,
      defaultTemplates: templatesPayload
    }
  } else return {}
}

Index.propTypes = {
  defaultTemplates: PropTypes.object,
  defaultRecords: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    daemonApi: state.Explorer.daemonApi
  }
}

const mapDispatchToProps = {
  setDefaultTemplates,
  setDefaultRecords,
  fetchingRecordsError,
  fetchingTemplatesError,
  getExchangeRate,
  getBalance,
  setPlatformData,
  registerPlatform
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
