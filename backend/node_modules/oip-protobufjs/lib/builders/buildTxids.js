"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildTxids;

var _index = require("../index");

const Txid = _index.ProtoModules.oipProto.Txid;
/**
 * Build txid proto message
 * @param {string|Array.<string>} txids - a string txid or an array of string txids
 */

function buildTxids(txids) {
  if (Array.isArray(txids)) {
    const newArray = [];

    for (const txid of txids) {
      newArray.push(createTxid(txid));
    }

    return newArray;
  } else {
    // handle null txid, protobuf.js type needs an object to succeed
    if (!txids) {
      return {};
    }

    return createTxid(txids);
  }
}

function createTxid(txid) {
  if (txid instanceof Txid) {
    return txid;
  }

  if (txid.length !== 64) {
    throw Error(`Txid must be 64 characters long. Was given: ${txid}`);
  }

  const payload = {
    raw: Buffer.from(txid, 'hex')
  };
  const err = Txid.verify(payload);
  if (err) throw Error(`txid failed payload verification: ${err}`);
  return Txid.create(payload);
}