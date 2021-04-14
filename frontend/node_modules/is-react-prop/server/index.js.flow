/* eslint-disable no-param-reassign, no-restricted-syntax */

import attrs from './htmlAttributes'
import checkAttr from './checkAttr'

const domProps = Object.keys(attrs).reduce((acc, elem: string) => {
  for (const attr of attrs[elem]) acc[attr] = true

  return acc
}, {})

export default (attr: string) => checkAttr(domProps, attr)
