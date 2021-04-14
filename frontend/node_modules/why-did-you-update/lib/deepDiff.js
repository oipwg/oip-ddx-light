'use strict';

exports.__esModule = true;
exports.classifyDiff = exports.DIFF_TYPES = undefined;

var _pick2 = require('lodash/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _every2 = require('lodash/every');

var _every3 = _interopRequireDefault(_every2);

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _union2 = require('lodash/union');

var _union3 = _interopRequireDefault(_union2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isEqual2 = require('lodash/isEqual');

var _isEqual3 = _interopRequireDefault(_isEqual2);

var _reactFastCompare = require('react-fast-compare');

var _reactFastCompare2 = _interopRequireDefault(_reactFastCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIFF_TYPES = exports.DIFF_TYPES = {
  UNAVOIDABLE: 'unavoidable',
  SAME: 'same',
  EQUAL: 'equal',
  FUNCTIONS: 'functions'
};

var classifyDiff = exports.classifyDiff = function classifyDiff(prev, next, name) {
  if (prev === next) {
    return {
      type: DIFF_TYPES.SAME,
      name: name,
      prev: prev,
      next: next
    };
  }

  if ((0, _reactFastCompare2.default)(prev, next)) {
    return {
      type: DIFF_TYPES.EQUAL,
      name: name,
      prev: prev,
      next: next
    };
  }

  if (!prev || !next) {
    return {
      type: DIFF_TYPES.UNAVOIDABLE,
      name: name,
      prev: prev,
      next: next
    };
  }

  var isChanged = function isChanged(key) {
    return prev[key] !== next[key] && !(0, _isEqual3.default)(prev[key], next[key]);
  };
  var isSameFunction = function isSameFunction(key) {
    var prevFn = prev[key];
    var nextFn = next[key];
    return (0, _isFunction3.default)(prevFn) && (0, _isFunction3.default)(nextFn) && prevFn.name === nextFn.name;
  };

  var keys = (0, _union3.default)((0, _keys3.default)(prev), (0, _keys3.default)(next));
  var changedKeys = (0, _filter3.default)(keys, isChanged);

  if (changedKeys.length && (0, _every3.default)(changedKeys, isSameFunction)) {
    return {
      type: DIFF_TYPES.FUNCTIONS,
      name: name,
      prev: (0, _pick3.default)(prev, changedKeys),
      next: (0, _pick3.default)(next, changedKeys)
    };
  }

  return {
    type: DIFF_TYPES.UNAVOIDABLE,
    name: name,
    prev: prev,
    next: next
  };
};