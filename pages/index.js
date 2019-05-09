import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, useTheme } from 'oip-react'
import config from '../config'

import InterfaceContainer from '../components/containers/InterfaceContainer'
import { createDaemonApi } from '../redux/actions/Explorer/thunks'
import { themeOptions } from '../styles/theme'

const Index = ({
  latestRecords,
  latestTemplates
}) => {
  const { theme } = useTheme(themeOptions, 'light')

  return <ThemeProvider theme={theme}>
    <InterfaceContainer
      latestRecords={latestRecords}
      latestTemplates={latestTemplates}
    />
  </ThemeProvider>
}

Index.getInitialProps = async (ctx) => {
  const { dispatch } = ctx.reduxStore

  dispatch(createDaemonApi(config.daemonApiUrl))

  return {
  }
}

Index.propTypes = {
  latestRecords: PropTypes.object,
  latestTemplates: PropTypes.object
}

export default Index
