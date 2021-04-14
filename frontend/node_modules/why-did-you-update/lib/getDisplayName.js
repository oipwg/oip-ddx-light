"use strict";

exports.__esModule = true;
var getDisplayName = exports.getDisplayName = function getDisplayName(ctor) {
  return ctor.displayName || ctor.name;
};