// next.config.js is not transformed by Babel. So you can only use javascript features supported by your version of Node.js.
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config

    // Example using webpack option
    config.node = { fs: 'empty' }
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    return config
  }
})
