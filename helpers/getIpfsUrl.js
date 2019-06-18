import config from '../config'

const ipfsGateway = config.ipfsGatewayUrl

const getIpfsUrl = ({ dirName, filename }) => {
  return `${ipfsGateway}/${dirName}/${filename}`
}

export default getIpfsUrl
