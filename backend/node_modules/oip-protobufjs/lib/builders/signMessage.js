"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = signMessage;

var _bitcoinjsMessage = require("bitcoinjs-message");

var _bitcoinjsLib = require("bitcoinjs-lib");

function signMessage({
  message,
  ECPair
}) {
  let privateKeyBuffer = ECPair.privateKey;
  let compressed = ECPair.compressed || true;
  let signature;

  try {
    signature = (0, _bitcoinjsMessage.sign)(message, privateKeyBuffer, compressed, ECPair.network.messagePrefix);
  } catch (e) {
    throw new Error(e);
  }

  const p2pkh = _bitcoinjsLib.payments.p2pkh({
    pubkey: ECPair.publicKey,
    network: ECPair.network
  }).address;

  const publicKey = ECPair.publicKey;
  let publicKeyAscii = new Uint8Array(p2pkh.length);

  for (let i in p2pkh) {
    publicKeyAscii[i] = p2pkh.charCodeAt(i);
  }

  return {
    signature,
    p2pkh,
    publicKey,
    publicKeyAscii
  };
}