const ipfsGateway = 'https://ipfs.io/ipfs/'
// const ipfsGatewayFallback = 'https://cloudflare-ipfs.com/ipfs/'

const getIpfsUrl = ({ dirName, filename }) => {
  return `${ipfsGateway}${dirName}/${filename}`
}

export default getIpfsUrl