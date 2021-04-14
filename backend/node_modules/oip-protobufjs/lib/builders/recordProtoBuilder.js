"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = recordProtoBuilder;

var _bitcoinjsLib = require("bitcoinjs-lib");

var _isValidWIF = _interopRequireDefault(require("../util/isValidWIF"));

var _networks = _interopRequireDefault(require("../networks"));

var _index = require("./index");

var _buildOipDetails = _interopRequireDefault(require("./buildOipDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function recordProtoBuilder({
  tags,
  payment,
  details,
  detailsData,
  permissions,
  wif,
  network = 'mainnet'
}) {
  if (!wif || wif === '') {
    throw new Error(`must pass in a defined WIF (Wallet Input Format); aka your private key; was passed: ${wif}`);
  }

  if (!(0, _isValidWIF.default)(wif, network)) {
    throw new Error(`Invalid WIF: ${wif}. network: ${network}`);
  }

  network = network === 'mainnet' ? _networks.default.floMainnet : _networks.default.floTestnet;

  const keypair = _bitcoinjsLib.ECPair.fromWIF(wif, network); // build details from param if passed


  if (detailsData) {
    try {
      details = (0, _buildOipDetails.default)(detailsData);
    } catch (err) {
      throw Error(`Failed to build OipDetails in recordProtoBuilder: \n ${err}`);
    }
  } // 1 build record message


  let recordData;

  try {
    recordData = (0, _index.buildRecord)({
      tags,
      payment,
      details,
      permissions
    });
  } catch (err) {
    throw Error(`Failed to build record in recordProtoBuilder: \n ${err}`);
  }

  const {
    recordMessage
  } = recordData; // 2 build OIP5

  let oipFiveData;

  try {
    oipFiveData = (0, _index.buildOipFiveTemplate)({
      record: recordMessage
    });
  } catch (err) {
    throw Error(`Failed to build OipFive proto template in recordProtoBuilder: \n ${err}`);
  }

  const {
    oip5messageBuffer,
    oip5message64
  } = oipFiveData; // 3 sign oip5b64 message

  let signedMessagedData;

  try {
    signedMessagedData = (0, _index.signMessage)({
      ECPair: keypair,
      message: oip5message64
    });
  } catch (err) {
    throw Error(`Failed to sign message in recordProtoBuilder: \n ${err}`);
  }

  const {
    publicKeyAscii,
    signature
  } = signedMessagedData; // 4 build SignedMessageProto

  try {
    return (0, _index.buildSignedMessage)({
      SerializedMessage: oip5messageBuffer,
      PubKey: publicKeyAscii,
      Signature: signature
    });
  } catch (err) {
    throw Error(`Failed to build signed message in recordProtoBuilder: \n ${err}`);
  }
}