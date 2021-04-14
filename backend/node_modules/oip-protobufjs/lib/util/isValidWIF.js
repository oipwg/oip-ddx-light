"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidWIF;

var _wif = _interopRequireDefault(require("wif"));

var _networks = _interopRequireDefault(require("../networks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Check if a WIF is valid for a specific CoinNetwork
 * @param  {string} key - Base58 WIF Private Key
 * @param  {CoinNetwork} network
 * @return {Boolean}
 */
function isValidWIF(key, network) {
  network = network === 'mainnet' ? _networks.default.floMainnet : _networks.default.floTestnet;

  try {
    let dec = _wif.default.decode(key);

    if (network) {
      return dec.version === network.wif;
    } else {
      return true;
    }
  } catch (e) {
    // console.error(e)
    return false;
  }
}