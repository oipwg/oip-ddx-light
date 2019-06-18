const config = {
  // this is the enpoint the api will use to fetch records/templates. ex. a running oipd node
  daemonApiUrl: 'https://api.oip.io/oip',
  // a url to a running Insight explorer endpoint
  explorerUrl: 'https://livenet.flocha.in/api',
  // ipfs gateway url
  ipfsGatewayUrl: 'https://ipfs.io/ipfs/',
  // testnet will not offer full functionality. but if you're using this you can probably figure out how to add what you want
  network: 'mainnet',
  // an array of string template names (tmpl_XXXXXXXX) to filter
  templateFilter: [],
  // whether you want to filter for records with (tmpl_A AND) tmpl_b or (tmpl_A OR tmpl_B)
  templateOperand: 'OR',
  // this is your WIF, your Wallet Import Format. Google for more information. If using flo-qt, use command: dumpprivkey
  privatekey: '',
  // this is the txid to a record containing a registerd platform template. needed and used for platform cuts
  platformRegistrationTxid: '7b4f590cc82d3a023e5842ab1c9395a216551d085918158fae19a2b4138fe106',
  // this sets the default value for whether you want to show only verified publishers or not
  showOnlyVerifiedPublishers: false,
  // theme information. can set your primary and secondary color here. Two most used theme variables
  primaryColor: '#3688aa',
  secondaryColor: '#d8443a'
}

export default config
