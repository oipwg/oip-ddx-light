"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = typeConvExtends;

function typeConvExtends(_extends) {
  if (!Array.isArray(_extends)) {
    if (typeof _extends === 'string') {
      _extends = _extends.replace(/,/g, "");
    }

    if (isNaN(Number(_extends))) {
      throw new Error(`param: {_extends} must be an sint64 or an array of sint64. Received: ${_extends} \n`);
    }

    return [Number(_extends)];
  } else {
    for (let i = 0; i < _extends.length; i++) {
      if (typeof _extends[i] === 'string') {
        _extends[i] = _extends[i].replace(/,/g, '');
      }

      let num = Number(_extends[i]);

      if (isNaN(num)) {
        throw new Error(`param: {_extends} must be an sint64 or an array of sint64. Received value: ${num} \n`);
      } else {
        _extends[i] = num;
      }
    }

    return _extends;
  }
}