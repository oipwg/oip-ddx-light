"use strict";

var _insightExplorer = require("@oipwg/insight-explorer");

var _bitcoinjsLib = require("@oipwg/bitcoinjs-lib");

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const bitcoinFeePerKb = 100000;
const n = _bitcoinjsLib.networks.testnet;
n.slip44 = 1;
module.exports = {
  name: 'bitcoinTestnet',
  displayName: 'Bitcoin Testnet',
  ticker: 'tBTC',
  satPerCoin: 1e8,
  feePerKb: bitcoinFeePerKb,
  feePerByte: bitcoinFeePerKb / 1000,
  maxFeePerByte: 100,
  minFee: 0,
  dust: 546,
  txVersion: 1,
  explorer: new _insightExplorer.Insight(_config.default.defaultApiUrls.bitcoinTestnet),
  network: n
};