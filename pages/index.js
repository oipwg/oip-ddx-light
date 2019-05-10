import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, useTheme } from 'oip-react'

import InterfaceContainer from '../components/containers/InterfaceContainer'

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

// Index.getInitialProps = async (ctx) => {}

Index.propTypes = {

}

export default Index
