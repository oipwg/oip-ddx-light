import config from '../config';

const ipfsGateway = config.ipfsGatewayUrl;

const getIpfsUrl = ({ dirName, filename }) => {
  //! Made this in to conditional to render addresses without a filename/////////////////////
  if (!filename) {
    return `${ipfsGateway}/${dirName}`;
  } else {
    return `${ipfsGateway}/${dirName}/${filename}`;
  }
};

export default getIpfsUrl;
