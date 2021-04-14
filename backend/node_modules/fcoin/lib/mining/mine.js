/*!
 * mine.js - mining function for bcoin
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

const assert = require('bsert');
const scrypt = require('bcrypto/lib/scrypt').derive;

/**
 * Hash until the nonce overflows.
 * @alias module:mining.mine
 * @param {Buffer} data
 * @param {Buffer} target - Big endian.
 * @param {Number} min
 * @param {Number} max
 * @returns {Number} Nonce or -1.
 */

function mine(data, target, min, max) {
  let nonce = min;

  data.writeUInt32LE(nonce, 76, true);

  // The heart and soul of the miner: match the target.
  while (nonce <= max) {
    // Hash and test against the next target.
    if (rcmp(powHash(data), target) <= 0)
      return nonce;

    // Increment the nonce to get a different hash.
    nonce += 1;

    // Update the raw buffer.
    data.writeUInt32LE(nonce, 76, true);
  }

  return -1;
}

/**
 * Proof of work function.
 * @param {Buffer} data
 * @returns {Buffer}
 */

function powHash(data) {
  return scrypt(data, data, 1024, 1, 1, 32);
}

/**
 * "Reverse" comparison so we don't have
 * to waste time reversing the block hash.
 * @ignore
 * @param {Buffer} a
 * @param {Buffer} b
 * @returns {Number}
 */

function rcmp(a, b) {
  assert(a.length === b.length);

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] < b[i])
      return -1;
    if (a[i] > b[i])
      return 1;
  }

  return 0;
}

/*
 * Expose
 */

module.exports = mine;
