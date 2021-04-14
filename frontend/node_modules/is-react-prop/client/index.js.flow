/* eslint-disable no-param-reassign, guard-for-in, no-restricted-syntax */

import createDomElem from './createDomElem'
import elements from './domElements'
import checkAttr from './checkAttr'

const domProps = elements.reduce((acc, elem: string) => {
  for (const key in Object.getPrototypeOf(createDomElem(elem))) acc[key] = true

  return acc
}, {})

export default (attr: string) => checkAttr(domProps, attr)
