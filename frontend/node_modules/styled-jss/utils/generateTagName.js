"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tagNameCounter = 0;

exports.default = function (tagName) {
  return tagName + "-" + ++tagNameCounter;
};