import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, useTheme } from 'oip-react'
import { connect } from 'react-redux'

import InterfaceContainer from '../components/containers/InterfaceContainer'

import { themeOptions } from '../styles/theme'
import { setDefaultRecords, setDefaultTemplates } from '../redux/actions/Explorer/creators'
import { getDefaultRecords, getDefaultTemplates } from '../redux/actions/Explorer/thunks'

const Index = ({
  defaultRecords,
  defaultTemplates,
  setDefaultRecords,
  setDefaultTemplates
}) => {
  const { theme } = useTheme(themeOptions, 'light')

  useEffect(() => {
    if (defaultRecords) {
      setDefaultRecords(defaultRecords)
    }
    if (defaultTemplates) {
      setDefaultTemplates(defaultTemplates)
    }
  }, [])

  return <ThemeProvider theme={theme}>
    <InterfaceContainer />
  </ThemeProvider>
}

Index.getInitialProps = async (ctx) => {
  return {}
  // const { req, reduxStore } = ctx
  // const { dispatch } = reduxStore
  // const isServer = !!req
  //
  // // this is a part of render blocking I think
  // const recordsPayload = await dispatch(getDefaultRecords())
  // const templatesPayload = await dispatch(getDefaultTemplates())
  //
  // if (isServer) {
  //   return {
  //     defaultRecords: recordsPayload,
  //     defaultTemplates: templatesPayload
  //   }
  // } else {
  //   dispatch(setDefaultRecords(recordsPayload))
  //   dispatch(setDefaultTemplates(templatesPayload))
  //   return {}
  // }
}

Index.propTypes = {
  defaultTemplates: PropTypes.object,
  defaultRecords: PropTypes.object
}

const mapDispatchToProps = {
  setDefaultTemplates,
  setDefaultRecords
}

export default connect(undefined, mapDispatchToProps)(Index)
