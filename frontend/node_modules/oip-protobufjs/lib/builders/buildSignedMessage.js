"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildSignedMessage;

var _protobufjs = require("protobufjs");

var _index = require("../index");

const SignedMessage = _index.ProtoModules.oipProto.SignedMessage;

function buildSignedMessage({
  SerializedMessage,
  MessageType = 1,
  SignatureType = 1,
  PubKey,
  Signature
}) {
  let signedMessagePayload = {
    SerializedMessage,
    MessageType,
    SignatureType,
    PubKey,
    Signature
  };
  let err = SignedMessage.verify(signedMessagePayload);

  if (err) {
    throw new Error(`Error verifying message payload as valid proto -- ${err}`);
  }

  const signedMessage = SignedMessage.create(signedMessagePayload);
  const signedMessageBuffer = SignedMessage.encode(signedMessage).finish(); // returns base64 encoded message ready for chain

  const signedMessage64 = _protobufjs.util.base64.encode(signedMessageBuffer, 0, signedMessageBuffer.length);

  return {
    signedMessage,
    signedMessageBuffer,
    signedMessage64
  };
}