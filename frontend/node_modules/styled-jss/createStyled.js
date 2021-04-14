'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styled = require('./styled');

var _styled2 = _interopRequireDefault(_styled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createStyled = function createStyled(jss) {
  return function () {
    var baseStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var sheet = void 0;

    var mountSheet = function mountSheet() {
      if (!sheet) {
        sheet = jss.createStyleSheet(baseStyles, {
          link: true,
          meta: 'styled-jss'
        }).attach();
      }

      return sheet;
    };

    var styledWrapper = function styledWrapper(element) {
      return function () {
        for (var _len = arguments.length, ownStyle = Array(_len), _key = 0; _key < _len; _key++) {
          ownStyle[_key] = arguments[_key];
        }

        return (0, _styled2.default)({ element: element, ownStyle: ownStyle, mountSheet: mountSheet, jss: jss });
      };
    };

    Object.defineProperty(styledWrapper, 'sheet', {
      get: function get() {
        return sheet;
      }
    }); // https://github.com/facebook/flow/issues/285

    return Object.assign(styledWrapper, { jss: jss, mountSheet: mountSheet, styles: baseStyles });
  };
};

exports.default = createStyled;