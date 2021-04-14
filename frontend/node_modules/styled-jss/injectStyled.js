'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _composeClasses = require('./utils/composeClasses');

var _composeClasses2 = _interopRequireDefault(_composeClasses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var injectStyled = function injectStyled(styled) {
  return function (InnerComponent) {
    var sheet = styled.mountSheet();

    var classes = Object.keys(sheet.classes).reduce(function (acc, name) {
      return Object.assign({}, acc, _defineProperty({}, name, (0, _composeClasses2.default)([sheet.classes[name]])));
    }, {});

    return function (props) {
      return (0, _react.createElement)(InnerComponent, Object.assign({ classes: classes }, props));
    };
  };
};

exports.default = injectStyled;