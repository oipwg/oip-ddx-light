'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectStyled = exports.Styled = exports.ThemeProvider = undefined;

var _theming = require('theming');

Object.defineProperty(exports, 'ThemeProvider', {
  enumerable: true,
  get: function get() {
    return _theming.ThemeProvider;
  }
});

var _injectStyled = require('./injectStyled');

Object.defineProperty(exports, 'injectStyled', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_injectStyled).default;
  }
});

var _jss = require('jss');

var _jssPresetDefault = require('jss-preset-default');

var _jssPresetDefault2 = _interopRequireDefault(_jssPresetDefault);

var _createStyled = require('./createStyled');

var _createStyled2 = _interopRequireDefault(_createStyled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jss = (0, _jss.create)((0, _jssPresetDefault2.default)());

var Styled = exports.Styled = (0, _createStyled2.default)(jss);
exports.default = Styled();