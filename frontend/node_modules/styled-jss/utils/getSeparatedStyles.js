'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isObservable = require('is-observable');

var _isObservable2 = _interopRequireDefault(_isObservable);

require('../types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isObject = function isObject(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null && !Array.isArray(value);
};

var separateStyles = function separateStyles(styles) {
  var result = {};
  var keys = Object.keys(styles);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = styles[key];
    var itemStyles = Object.create(null);

    if (typeof value === 'function' || (0, _isObservable2.default)(value)) itemStyles.dynamicStyle = value;else if (isObject(value)) Object.assign(itemStyles, separateStyles(value));else itemStyles.staticStyle = value;

    for (var styleType in itemStyles) {
      result[styleType] = result[styleType] || {};
      result[styleType][key] = itemStyles[styleType];
    }
  }

  return result;
};

/**
 * Extracts static and dynamic styles objects separately
 */
var getSeparatedStyles = function getSeparatedStyles() {
  for (var _len = arguments.length, initialStyles = Array(_len), _key = 0; _key < _len; _key++) {
    initialStyles[_key] = arguments[_key];
  }

  var styles = {};
  var fns = [];

  for (var i = 0; i < initialStyles.length; i++) {
    var style = initialStyles[i];

    if (typeof style === 'function') {
      fns.push(style);
    } else {
      Object.assign(styles, style);
    }
  }

  var result = separateStyles(styles);

  if (fns.length) {
    var _result$dynamicStyle = result.dynamicStyle,
        _dynamicStyle = _result$dynamicStyle === undefined ? {} : _result$dynamicStyle;

    result.dynamicStyle = function (props) {
      var fnObjects = [];
      var dynamicResult = {};

      for (var _i = 0; _i < fns.length; _i++) {
        fnObjects.push(fns[_i](props));
      }

      var keys = Object.keys(_dynamicStyle);
      for (var _i2 = 0; _i2 < keys.length; _i2++) {
        dynamicResult[keys[_i2]] = _dynamicStyle[keys[_i2]](props);
      }

      return Object.assign.apply(Object, [dynamicResult].concat(fnObjects));
    };
  }

  return result;
};

exports.default = getSeparatedStyles;