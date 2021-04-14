"use strict";

const json = require('./json/compiled'); // const jsonModules = require('./jsonModules/compiled')
// const proto2 = require('./proto2/compiled.proto')
// const proto3 = require('./proto3/compiled.proto')
// const staticJs = require('./static/compiled.js')


const staticModules = require('./staticModules/compiled.js');

module.exports = {
  json,
  // jsonModules,
  // proto2,
  // proto3,
  // staticJs,
  staticModules
};