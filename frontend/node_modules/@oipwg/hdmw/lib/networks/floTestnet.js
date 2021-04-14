"use strict";

var _insightExplorer = require("@oipwg/insight-explorer");

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const floFeePerKb = 100000;
module.exports = {
  name: 'floTestnet',
  displayName: 'Flo Testnet',
  ticker: 'tFLO',
  satPerCoin: 1e8,
  feePerKb: floFeePerKb,
  feePerByte: floFeePerKb / 1000,
  maxFeePerByte: 100,
  minFee: 0,
  dust: 100000,
  txVersion: 2,
  explorer: new _insightExplorer.Insight(_config.default.defaultApiUrls.floTestnet),
  hasFloData: true,
  network: {
    bip32: {
      public: 0x013440e2,
      private: 0x01343c23
    },
    slip44: 1,
    messagePrefix: '\u001bFlorincoin Signed Message:\n',
    pubKeyHash: 115,
    scriptHash: 58,
    wif: 239
  }
};