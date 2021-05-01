import * as PropTypes from 'prop-types'

export const string = PropTypes.string
export const number = PropTypes.number
export const object = shape => PropTypes.shape(shape)
export const arrayOf = types => PropTypes.arrayOf(types)
export const OipRef = string
export const IpfsAddress = string
