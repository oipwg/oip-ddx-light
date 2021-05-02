import { get } from '../../../util/request-wrapper'
import config from '../../../config'

export default function getIpfsObject (address, options) {
  return get(`${config.ipfsGatewayUrl}/${address}`, options)
}
