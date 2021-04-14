"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = templateBuilder;

var _bitcoinjsLib = require("bitcoinjs-lib");

var _isValidWIF = _interopRequireDefault(require("../util/isValidWIF"));

var _networks = _interopRequireDefault(require("../networks"));

var _index = require("./index");

var _typeConvExtends = _interopRequireDefault(require("../util/typeConvExtends"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function templateBuilder({
  friendlyName,
  description,
  DescriptorSetProto,
  _extends,
  wif,
  network = 'mainnet'
}) {
  if (!friendlyName || friendlyName === '') {
    throw new Error(`template name must be defined; was passed: ${friendlyName} \n`);
  }

  if (!description || description === '') {
    throw new Error(`description must be defined; was passed: ${description} \n`);
  }

  if (!DescriptorSetProto) {
    throw new Error(`DescriptorSetProto must be a defined Uint8Array; was passed: ${DescriptorSetProto} \n`);
  }

  if (!wif || wif === '') {
    throw new Error(`must pass in a defined WIF (Wallet Input Format); aka your private key; was passed: ${wif} \n`);
  }

  if (!(0, _isValidWIF.default)(wif, network)) {
    throw new Error(`Invalid WIF: ${wif}. network: ${network} \n`);
  }

  if (_extends) {
    try {
      _extends = (0, _typeConvExtends.default)(_extends);
    } catch (err) {
      throw new Error(`Failed to convert types in {_extend} param: \n ${err}`);
    }
  }

  network = network === 'mainnet' ? _networks.default.floMainnet : _networks.default.floTestnet;

  const keypair = _bitcoinjsLib.ECPair.fromWIF(wif, network); // 1 build template message


  let templateData;

  try {
    templateData = (0, _index.buildRecordTemplate)({
      friendlyName,
      description,
      DescriptorSetProto,
      _extends
    });
  } catch (err) {
    throw Error(`Failed to build record template in templateBuilder.js: \n ${err}`);
  }

  let {
    templateMessage
  } = templateData; // 2 build OIP5

  let oipFiveData;

  try {
    oipFiveData = (0, _index.buildOipFiveTemplate)({
      recordTemplate: templateMessage
    });
  } catch (err) {
    throw Error(`Failed to build OipFive proto in templateBuilder.js: \n ${err}`);
  }

  const {
    oip5messageBuffer,
    oip5message64
  } = oipFiveData; // 3 sign oip5b64 message

  let signedMessageData;

  try {
    signedMessageData = (0, _index.signMessage)({
      ECPair: keypair,
      message: oip5message64
    });
  } catch (err) {
    throw Error(`Failed to sign message in templateBuilder.js: \n ${err}`);
  }

  const {
    publicKeyAscii,
    signature
  } = signedMessageData; // 4 build SignedMessageProto

  try {
    return (0, _index.buildSignedMessage)({
      SerializedMessage: oip5messageBuffer,
      PubKey: publicKeyAscii,
      Signature: signature
    });
  } catch (err) {
    throw Error(`Failed to build signed message in templateBuilder.js: \n ${err}`);
  }
}