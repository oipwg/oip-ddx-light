import reactProps from './reactProps'
import isCustomProp from '../common/isCustomProp'
import attrs from './htmlAttributes'

export default (elem: string | Object, prop: string) =>
  reactProps.has(prop)
    || attrs['*'].has(prop)
    || (typeof elem === 'string' ? attrs[elem] && attrs[elem].has(prop) : prop in elem)
    || isCustomProp(prop.toLowerCase())
