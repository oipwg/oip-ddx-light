'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkAttr = require('is-react-prop/checkAttr');

var _checkAttr2 = _interopRequireDefault(_checkAttr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (tagName, props) {
  var filtered = {};
  var propNames = Object.keys(props);
  var name = void 0;

  for (var i = 0; i < propNames.length; i++) {
    name = propNames[i];

    if ((0, _checkAttr2.default)(tagName, name)) {
      filtered[name] = props[name];
    }
  }

  return filtered;
};