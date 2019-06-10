import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import InterfaceContainer from '../components/containers/InterfaceContainer'

import {
  fetchingRecordsError,
  fetchingTemplatesError,
  setDefaultRecords,
  setDefaultTemplates
} from '../redux/actions/Explorer/creators'
import { getDefaultRecords, getDefaultTemplates } from '../redux/actions/Explorer/thunks'
import { getBalance, getExchangeRate } from '../redux/actions/Wallet/thunks'

const Index = ({
  defaultRecords,
  defaultTemplates,
  setDefaultRecords,
  setDefaultTemplates,
  fetchingRecordsError,
  fetchingTemplatesError,
  getExchangeRate,
  getBalance
}) => {
  useEffect(() => {
    if (defaultRecords) {
      const { error } = defaultRecords
      if (error) {
        fetchingRecordsError(error)
      } else setDefaultRecords(defaultRecords)
    }
    if (defaultTemplates) {
      const { error } = defaultTemplates
      if (error) {
        fetchingTemplatesError(error)
      } else setDefaultTemplates(defaultTemplates)
    }
  }, [])

  // get flo balance and exchange rate
  useEffect(() => {
    const getXrAndBalance = async () => {
      await getExchangeRate()
      await getBalance()
    }

    getXrAndBalance()
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

const mapDispatchToProps = {
  setDefaultTemplates,
  setDefaultRecords,
  fetchingRecordsError,
  fetchingTemplatesError,
  getExchangeRate,
  getBalance
}

export default connect(null, mapDispatchToProps)(Index)
