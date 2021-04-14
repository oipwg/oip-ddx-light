'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (classes) {
  var filtered = [];
  for (var len = classes.length, index = 0; index < len; index++) {
    if (classes[index]) filtered.push(classes[index]);
  }

  return filtered.join(' ');
};