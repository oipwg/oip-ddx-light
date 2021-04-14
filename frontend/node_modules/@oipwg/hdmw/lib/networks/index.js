"use strict";

var _bitcoin = _interopRequireDefault(require("./bitcoin"));

var _bitcoinTestnet = _interopRequireDefault(require("./bitcoinTestnet"));

var _flo = _interopRequireDefault(require("./flo"));

var _floTestnet = _interopRequireDefault(require("./floTestnet"));

var _litecoin = _interopRequireDefault(require("./litecoin"));

var _litecoinTestnet = _interopRequireDefault(require("./litecoinTestnet"));

var _raven = _interopRequireDefault(require("./raven"));

var _ravenTestnet = _interopRequireDefault(require("./ravenTestnet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  bitcoin: _bitcoin.default,
  bitcoinTestnet: _bitcoinTestnet.default,
  flo: _flo.default,
  floTestnet: _floTestnet.default,
  litecoin: _litecoin.default,
  litecoinTestnet: _litecoinTestnet.default,
  raven: _raven.default,
  ravenTestnet: _ravenTestnet.default
};