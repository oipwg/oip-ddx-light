"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildRecordTemplate;

var _protobufjs = require("protobufjs");

var _index = require("../index");

const RecordTemplateProto = _index.ProtoModules.oipProto.RecordTemplateProto;

function buildRecordTemplate({
  friendlyName,
  description,
  DescriptorSetProto,
  _extends
}) {
  const templatePayload = {
    friendlyName,
    description,
    DescriptorSetProto,
    extends: _extends
  };
  let err = RecordTemplateProto.verify(templatePayload);

  if (err) {
    throw new Error(err);
  }

  const templateMessage = RecordTemplateProto.create(templatePayload);
  const templateBuffer = RecordTemplateProto.encode(templateMessage).finish();

  const template64 = _protobufjs.util.base64.encode(templateBuffer, 0, templateBuffer.length);

  return {
    templateBuffer,
    template64,
    templateMessage
  };
}