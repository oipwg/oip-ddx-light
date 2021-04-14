import App, { Container } from 'next/app'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { ThemeProvider, useTheme } from 'oip-react'
import { themeOptions } from '../styles/theme'

import 'video.js/dist/video-js.css'
import '../static/styles/css/VideoPlayer.css'

class MyApp extends App {
  componentDidMount () {
    const style = document.getElementById('server-side-styles')

    if (style) {
      style.parentNode.removeChild(style)
    }
  }
  render () {
    const { Component, pageProps, reduxStore } = this.props

    return (
        <Provider store={reduxStore}>
          <ThemedApp Component={Component} pageProps={pageProps} />
        </Provider>
    )
  }
}

const ThemedApp = ({ Component, pageProps }) => {
  const { theme } = useTheme(themeOptions, 'light')
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default withReduxStore(MyApp)
