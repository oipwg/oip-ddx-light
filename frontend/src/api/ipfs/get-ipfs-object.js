import { get } from '../../../util/request-wrapper'
import config from '../../../config'

export default function getIpfsObject (address) {
	return get(`${config.ipfsGatewayUrl}/${address}`)
}
