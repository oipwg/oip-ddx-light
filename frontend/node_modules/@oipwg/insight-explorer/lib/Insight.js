"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _axios = _interopRequireDefault(require("axios"));

module.exports =
/*#__PURE__*/
function () {
  function Insight(url) {
    (0, _classCallCheck2["default"])(this, Insight);
    this.url = url;
    this.api = _axios["default"].create({
      baseURL: this.url
    });
  }

  (0, _createClass2["default"])(Insight, [{
    key: "getBlock",
    value: function () {
      var _getBlock = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(hash) {
        var response;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.api.get('/block/' + hash);

              case 3:
                response = _context.sent;
                return _context.abrupt("return", response.data);

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                throw this.createErrorString('getBlock', _context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function getBlock(_x) {
        return _getBlock.apply(this, arguments);
      }

      return getBlock;
    }()
  }, {
    key: "getBlockIndex",
    value: function () {
      var _getBlockIndex = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(height) {
        var response;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.api.get('/block-index/' + height);

              case 3:
                response = _context2.sent;
                return _context2.abrupt("return", response.data);

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                throw this.createErrorString('getBlockIndex', _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 7]]);
      }));

      function getBlockIndex(_x2) {
        return _getBlockIndex.apply(this, arguments);
      }

      return getBlockIndex;
    }()
  }, {
    key: "getRawBlock",
    value: function () {
      var _getRawBlock = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(block) {
        var response;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return this.api.get('/rawblock/' + block);

              case 3:
                response = _context3.sent;
                return _context3.abrupt("return", response.data);

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                throw this.createErrorString('getRawBlock', _context3.t0);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function getRawBlock(_x3) {
        return _getRawBlock.apply(this, arguments);
      }

      return getRawBlock;
    }()
  }, {
    key: "getBlockSummary",
    value: function () {
      var _getBlockSummary = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(limit, blockDate) {
        var reqURL, q, response;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                reqURL = '/blocks';
                q = {};

                if (limit && limit !== '') {
                  q.limit = limit;
                }

                if (blockDate && blockDate !== '') {
                  q.blockDate = blockDate;
                }

                _context4.prev = 4;
                _context4.next = 7;
                return this.api.get(reqURL, {
                  params: q
                });

              case 7:
                response = _context4.sent;
                return _context4.abrupt("return", response.data);

              case 11:
                _context4.prev = 11;
                _context4.t0 = _context4["catch"](4);
                throw this.createErrorString('getBlockSummary', _context4.t0);

              case 14:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[4, 11]]);
      }));

      function getBlockSummary(_x4, _x5) {
        return _getBlockSummary.apply(this, arguments);
      }

      return getBlockSummary;
    }()
  }, {
    key: "getTransaction",
    value: function () {
      var _getTransaction = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(txid) {
        var response;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return this.api.get('/tx/' + txid);

              case 3:
                response = _context5.sent;
                return _context5.abrupt("return", response.data);

              case 7:
                _context5.prev = 7;
                _context5.t0 = _context5["catch"](0);
                throw this.createErrorString('getTransaction', _context5.t0);

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[0, 7]]);
      }));

      function getTransaction(_x6) {
        return _getTransaction.apply(this, arguments);
      }

      return getTransaction;
    }()
  }, {
    key: "getRawTransaction",
    value: function () {
      var _getRawTransaction = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(txid) {
        var response;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.prev = 0;
                _context6.next = 3;
                return this.api.get('/rawtx/' + txid);

              case 3:
                response = _context6.sent;
                return _context6.abrupt("return", response.data);

              case 7:
                _context6.prev = 7;
                _context6.t0 = _context6["catch"](0);
                throw this.createErrorString('getRawTransaction', _context6.t0);

              case 10:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[0, 7]]);
      }));

      function getRawTransaction(_x7) {
        return _getRawTransaction.apply(this, arguments);
      }

      return getRawTransaction;
    }()
  }, {
    key: "getAddress",
    value: function () {
      var _getAddress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(address, options) {
        var reqURL, q, response;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                reqURL = '/addr/' + address + '?';
                q = {};

                if (options) {
                  if (options.noTxList) {
                    q.noTxList = options.noTxList;
                  }

                  if (options.from) {
                    q.from = options.from;
                  }

                  if (options.to) {
                    q.to = options.to;
                  }
                }

                _context7.prev = 3;
                _context7.next = 6;
                return this.api.get(reqURL, {
                  params: q
                });

              case 6:
                response = _context7.sent;
                return _context7.abrupt("return", response.data);

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](3);
                throw this.createErrorString('getAddress', _context7.t0);

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[3, 10]]);
      }));

      function getAddress(_x8, _x9) {
        return _getAddress.apply(this, arguments);
      }

      return getAddress;
    }()
  }, {
    key: "getAddressProperties",
    value: function () {
      var _getAddressProperties = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(address, property) {
        var response;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.prev = 0;
                _context8.next = 3;
                return this.api.get('/addr/' + address + '/' + property);

              case 3:
                response = _context8.sent;
                return _context8.abrupt("return", response.data);

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](0);
                throw this.createErrorString('getAddressProperties', _context8.t0);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[0, 7]]);
      }));

      function getAddressProperties(_x10, _x11) {
        return _getAddressProperties.apply(this, arguments);
      }

      return getAddressProperties;
    }()
  }, {
    key: "getAddressUtxo",
    value: function () {
      var _getAddressUtxo = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(address) {
        var response;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return this.api.get('/addr/' + address + '/utxo');

              case 3:
                response = _context9.sent;
                return _context9.abrupt("return", response.data);

              case 7:
                _context9.prev = 7;
                _context9.t0 = _context9["catch"](0);
                throw this.createErrorString('getAddressUtxo', _context9.t0);

              case 10:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 7]]);
      }));

      function getAddressUtxo(_x12) {
        return _getAddressUtxo.apply(this, arguments);
      }

      return getAddressUtxo;
    }()
  }, {
    key: "getAddressesUtxo",
    value: function () {
      var _getAddressesUtxo = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(addresses) {
        var response;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.prev = 0;
                _context10.next = 3;
                return this.api.post('/addrs/utxo', {
                  addrs: addresses.join()
                });

              case 3:
                response = _context10.sent;
                return _context10.abrupt("return", response.data);

              case 7:
                _context10.prev = 7;
                _context10.t0 = _context10["catch"](0);
                throw this.createErrorString('getAddressesUtxo', _context10.t0);

              case 10:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[0, 7]]);
      }));

      function getAddressesUtxo(_x13) {
        return _getAddressesUtxo.apply(this, arguments);
      }

      return getAddressesUtxo;
    }()
  }, {
    key: "getTransactionsForBlock",
    value: function () {
      var _getTransactionsForBlock = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(hash) {
        var response;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.prev = 0;
                _context11.next = 3;
                return this.api.get('/txs/?block=' + hash);

              case 3:
                response = _context11.sent;
                return _context11.abrupt("return", response.data);

              case 7:
                _context11.prev = 7;
                _context11.t0 = _context11["catch"](0);
                throw this.createErrorString('getTransactionsForBlock', _context11.t0);

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this, [[0, 7]]);
      }));

      function getTransactionsForBlock(_x14) {
        return _getTransactionsForBlock.apply(this, arguments);
      }

      return getTransactionsForBlock;
    }()
  }, {
    key: "getTransactionsForAddress",
    value: function () {
      var _getTransactionsForAddress = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(address) {
        var response;
        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return this.api.get('/txs/?address=' + address);

              case 3:
                response = _context12.sent;
                return _context12.abrupt("return", response.data);

              case 7:
                _context12.prev = 7;
                _context12.t0 = _context12["catch"](0);
                throw this.createErrorString('getTransactionsForAddress', _context12.t0);

              case 10:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this, [[0, 7]]);
      }));

      function getTransactionsForAddress(_x15) {
        return _getTransactionsForAddress.apply(this, arguments);
      }

      return getTransactionsForAddress;
    }()
  }, {
    key: "getTransactionsForAddresses",
    value: function () {
      var _getTransactionsForAddresses = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(addresses, options) {
        var opts, response;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                opts = options || {};
                opts.addrs = addresses.join();
                _context13.prev = 2;
                _context13.next = 5;
                return this.api.post('/addrs/txs', opts);

              case 5:
                response = _context13.sent;
                return _context13.abrupt("return", response.data);

              case 9:
                _context13.prev = 9;
                _context13.t0 = _context13["catch"](2);
                throw this.createErrorString('getTransactionsForAddresses', _context13.t0);

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this, [[2, 9]]);
      }));

      function getTransactionsForAddresses(_x16, _x17) {
        return _getTransactionsForAddresses.apply(this, arguments);
      }

      return getTransactionsForAddresses;
    }()
  }, {
    key: "broadcastRawTransaction",
    value: function () {
      var _broadcastRawTransaction = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(rawtx, options) {
        var opts, response;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                opts = options || {};
                opts.rawtx = rawtx;
                _context14.prev = 2;
                _context14.next = 5;
                return this.api.post('/tx/send', opts);

              case 5:
                response = _context14.sent;

                if (!(response.data && (0, _typeof2["default"])(response.data.txid) === 'object')) {
                  _context14.next = 9;
                  break;
                }

                response.data.txid = response.data.txid.result;
                return _context14.abrupt("return", response.data);

              case 9:
                return _context14.abrupt("return", response.data);

              case 12:
                _context14.prev = 12;
                _context14.t0 = _context14["catch"](2);
                throw this.createErrorString('broadcastRawTransaction', _context14.t0);

              case 15:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this, [[2, 12]]);
      }));

      function broadcastRawTransaction(_x18, _x19) {
        return _broadcastRawTransaction.apply(this, arguments);
      }

      return broadcastRawTransaction;
    }()
  }, {
    key: "getSync",
    value: function () {
      var _getSync = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15() {
        var response;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.prev = 0;
                _context15.next = 3;
                return this.api.get('/sync');

              case 3:
                response = _context15.sent;
                return _context15.abrupt("return", response.data);

              case 7:
                _context15.prev = 7;
                _context15.t0 = _context15["catch"](0);
                throw this.createErrorString('getSync', _context15.t0);

              case 10:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this, [[0, 7]]);
      }));

      function getSync() {
        return _getSync.apply(this, arguments);
      }

      return getSync;
    }()
  }, {
    key: "getPeer",
    value: function () {
      var _getPeer = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16() {
        var response;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.prev = 0;
                _context16.next = 3;
                return this.api.get('/peer');

              case 3:
                response = _context16.sent;
                return _context16.abrupt("return", response.data);

              case 7:
                _context16.prev = 7;
                _context16.t0 = _context16["catch"](0);
                throw this.createErrorString('getPeer', _context16.t0);

              case 10:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this, [[0, 7]]);
      }));

      function getPeer() {
        return _getPeer.apply(this, arguments);
      }

      return getPeer;
    }()
  }, {
    key: "getStatus",
    value: function () {
      var _getStatus = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(query) {
        var response;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.prev = 0;
                _context17.next = 3;
                return this.api.get('/status?q=' + query);

              case 3:
                response = _context17.sent;
                return _context17.abrupt("return", response.data);

              case 7:
                _context17.prev = 7;
                _context17.t0 = _context17["catch"](0);
                throw this.createErrorString('getStatus', _context17.t0);

              case 10:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this, [[0, 7]]);
      }));

      function getStatus(_x20) {
        return _getStatus.apply(this, arguments);
      }

      return getStatus;
    }()
  }, {
    key: "getExchangeRate",
    value: function () {
      var _getExchangeRate = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18() {
        var response;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.prev = 0;
                _context18.next = 3;
                return this.api.get('/currency');

              case 3:
                response = _context18.sent;
                return _context18.abrupt("return", response.data);

              case 7:
                _context18.prev = 7;
                _context18.t0 = _context18["catch"](0);
                throw this.createErrorString('getExchangeRate', _context18.t0);

              case 10:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this, [[0, 7]]);
      }));

      function getExchangeRate() {
        return _getExchangeRate.apply(this, arguments);
      }

      return getExchangeRate;
    }()
  }, {
    key: "estimateFee",
    value: function () {
      var _estimateFee = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(nbBlocks) {
        var reqURL, q, response;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                reqURL = '/utils/estimatefee';
                q = {};

                if (nbBlocks && nbBlocks !== '') {
                  q.nbBlocks = nbBlocks;
                }

                _context19.prev = 3;
                _context19.next = 6;
                return this.api.get(reqURL, {
                  params: q
                });

              case 6:
                response = _context19.sent;
                return _context19.abrupt("return", response.data);

              case 10:
                _context19.prev = 10;
                _context19.t0 = _context19["catch"](3);
                throw this.createErrorString('estimateFee', _context19.t0);

              case 13:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this, [[3, 10]]);
      }));

      function estimateFee(_x21) {
        return _estimateFee.apply(this, arguments);
      }

      return estimateFee;
    }()
  }, {
    key: "createErrorString",
    value: function createErrorString(functionName, error) {
      var extraErrorText = '';

      if (error && error.response) {
        if (error.response.status) {
          extraErrorText += error.response.status + ' ';
        }

        if (error.response.statusText) {
          extraErrorText += error.response.statusText + ' | ';
        }

        if (error.response.data) {
          extraErrorText += error.response.data;
        }
      } else {
        extraErrorText = error.toString();
      }

      return new Error('Unable to ' + functionName + ': ' + extraErrorText);
    }
  }]);
  return Insight;
}();