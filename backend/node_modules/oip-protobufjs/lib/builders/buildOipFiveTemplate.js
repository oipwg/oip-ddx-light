"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildOipFiveTemplate;

var _protobufjs = require("protobufjs");

var _index = require("../index");

const OipFiveProto = _index.ProtoModules.oipProto.OipFive;

function buildOipFiveTemplate({
  recordTemplate,
  record,
  normalize,
  transfer,
  deactivate,
  edit
}) {
  const templatePayload = {
    recordTemplate,
    record,
    normalize,
    transfer,
    deactivate,
    edit
  };
  let err = OipFiveProto.verify(templatePayload);

  if (err) {
    throw new Error(err);
  }

  const oip5message = OipFiveProto.create(templatePayload);
  const oip5messageBuffer = OipFiveProto.encode(oip5message).finish();

  const oip5message64 = _protobufjs.util.base64.encode(oip5messageBuffer, 0, oip5messageBuffer.length);

  return {
    oip5messageBuffer,
    oip5message64,
    oip5message
  };
}