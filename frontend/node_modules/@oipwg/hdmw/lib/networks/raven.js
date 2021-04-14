"use strict";

var _insightExplorer = require("@oipwg/insight-explorer");

var coinInfo = _interopRequireWildcard(require("coininfo"));

var bip44constants = _interopRequireWildcard(require("bip44-constants"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ravenFeePerKb = 1e6;
const n = coinInfo.ravencoin.main.toBitcoinJS();
module.exports = {
  name: 'raven',
  displayName: 'Ravencoin',
  ticker: 'RVN',
  satPerCoin: 1e8,
  feePerKb: ravenFeePerKb,
  feePerByte: ravenFeePerKb / 1000,
  maxFeePerByte: 100,
  minFee: 0,
  dust: 54600,
  txVersion: 1,
  explorer: new _insightExplorer.Insight(_config.default.defaultApiUrls.raven, false),
  network: {
    bip32: {
      public: n.bip32.public,
      private: n.bip32.private
    },
    slip44: bip44constants.RVN,
    messagePrefix: '\u0016Raven Signed Message:\n',
    pubKeyHash: n.pubKeyHash,
    scriptHash: n.scriptHash,
    wif: n.wif
  }
};