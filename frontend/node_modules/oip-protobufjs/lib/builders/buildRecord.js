"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildRecord;

var _protobufjs = require("protobufjs");

var _index = require("../index");

const RecordProto = _index.ProtoModules.oipProto.RecordProto;

function buildRecord({
  tags,
  payment,
  details,
  permissions
}) {
  const recordPayload = {
    tags,
    payment,
    details,
    permissions
  };
  let err = RecordProto.verify(recordPayload);

  if (err) {
    throw new Error(err);
  }

  const recordMessage = RecordProto.create(recordPayload);
  const recordBuffer = RecordProto.encode(recordMessage).finish();

  const record64 = _protobufjs.util.base64.encode(recordBuffer, 0, recordBuffer.length);

  return {
    recordBuffer,
    record64,
    recordMessage
  };
}