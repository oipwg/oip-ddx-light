"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

module.exports =
/*#__PURE__*/
function () {
  function InsightGroup(url) {
    (0, _classCallCheck2["default"])(this, InsightGroup);
    this.url = url;
  }

  (0, _createClass2["default"])(InsightGroup, [{
    key: "getBlock",
    value: function getBlock(hash) {}
  }, {
    key: "getBlockIndex",
    value: function getBlockIndex(height) {}
  }, {
    key: "getRawBlock",
    value: function getRawBlock(hash) {}
  }, {
    key: "getBlockSummary",
    value: function getBlockSummary(limit, blockDate) {}
  }, {
    key: "getTransaction",
    value: function getTransaction(txid) {}
  }, {
    key: "getRawTransaction",
    value: function getRawTransaction(txid) {}
  }, {
    key: "getAddress",
    value: function getAddress(address) {}
  }, {
    key: "getAddressProperties",
    value: function getAddressProperties(address, property) {}
  }, {
    key: "getAddressUtxo",
    value: function getAddressUtxo(address) {}
  }, {
    key: "getAddressesUtxo",
    value: function getAddressesUtxo(addresses) {}
  }, {
    key: "getTransactionsForBlock",
    value: function getTransactionsForBlock(hash) {}
  }, {
    key: "getTransactionsForAddress",
    value: function getTransactionsForAddress(address) {}
  }, {
    key: "getTransactionsForAddresses",
    value: function getTransactionsForAddresses(addresses, options) {}
  }, {
    key: "broadcastRawTransaction",
    value: function broadcastRawTransaction(rawtx) {}
  }, {
    key: "getSync",
    value: function getSync() {}
  }, {
    key: "getPeer",
    value: function getPeer() {}
  }, {
    key: "getStatus",
    value: function getStatus(query) {}
  }, {
    key: "on",
    value: function on(event, callback) {}
  }, {
    key: "simpleGET",
    value: function simpleGET() {}
  }, {
    key: "simplePOST",
    value: function simplePOST() {}
  }]);
  return InsightGroup;
}();