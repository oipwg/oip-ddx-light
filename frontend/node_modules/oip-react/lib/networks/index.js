"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsOip = require("js-oip");

const {
  floMainnet,
  floTestnet
} = _jsOip.Networks;
const networks = {
  floMainnet: floMainnet.network,
  floTestnet: floTestnet.network
};
var _default = networks;
exports.default = _default;