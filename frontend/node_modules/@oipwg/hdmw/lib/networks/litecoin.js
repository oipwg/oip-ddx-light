"use strict";

var _insightExplorer = require("@oipwg/insight-explorer");

var _coininfo = _interopRequireDefault(require("coininfo"));

var _bip44Constants = _interopRequireDefault(require("bip44-constants"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const litecoinFeePerKb = 100000;

const n = _coininfo.default.litecoin.main.toBitcoinJS();

module.exports = {
  name: 'litecoin',
  displayName: 'Litecoin',
  ticker: 'LTC',
  satPerCoin: 1e8,
  feePerKb: litecoinFeePerKb,
  feePerByte: litecoinFeePerKb / 1000,
  maxFeePerByte: 100,
  minFee: 0,
  dust: 54600,
  txVersion: 1,
  explorer: new _insightExplorer.Insight(_config.default.defaultApiUrls.litecoin),
  network: {
    bip32: {
      public: n.bip32.public,
      private: n.bip32.private
    },
    slip44: _bip44Constants.default.LTC,
    messagePrefix: '\u0018Litecoin Signed Message:\n',
    pubKeyHash: n.pubKeyHash,
    scriptHash: n.scriptHash,
    wif: n.wif
  }
};