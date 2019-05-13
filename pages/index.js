import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, useTheme } from 'oip-react'
import { connect } from 'react-redux'

import InterfaceContainer from '../components/containers/InterfaceContainer'

import { themeOptions } from '../styles/theme'
import {
  fetchingRecordsError,
  fetchingTemplatesError,
  setDefaultRecords,
  setDefaultTemplates
} from '../redux/actions/Explorer/creators'
import { getDefaultRecords, getDefaultTemplates } from '../redux/actions/Explorer/thunks'

const Index = ({
  defaultRecords,
  defaultTemplates,
  setDefaultRecords,
  setDefaultTemplates,
  fetchingRecordsError,
  fetchingTemplatesError
}) => {
  const { theme } = useTheme(themeOptions, 'light')

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

  return <ThemeProvider theme={theme}>
    <InterfaceContainer />
  </ThemeProvider>
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
  fetchingTemplatesError
}

export default connect(undefined, mapDispatchToProps)(Index)
