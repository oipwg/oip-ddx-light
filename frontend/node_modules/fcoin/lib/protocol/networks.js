/*!
 * network.js - bitcoin networks for bcoin
 * Copyright (c) 2014-2015, Fedor Indutny (MIT License)
 * Copyright (c) 2014-2017, Christopher Jeffrey (MIT License).
 * https://github.com/bcoin-org/bcoin
 */

'use strict';

/**
 * @module protocol/networks
 */

const BN = require('bcrypto/lib/bn.js');

const network = exports;

/*
 * Helpers
 */

function b(hash) {
  return Buffer.from(hash, 'hex');
}

/**
 * Network type list.
 * @memberof module:protocol/networks
 * @const {String[]}
 * @default
 */

network.types = ['main', 'testnet', 'regtest', 'simnet'];

/**
 * Mainnet
 * @static
 * @lends module:protocol/networks
 * @type {Object}
 */

const main = {};

/**
 * Symbolic network type.
 * @const {String}
 * @default
 */

main.type = 'main';

/**
 * Default DNS seeds.
 * @const {String[]}
 * @default
 */

main.seeds = [
  'seed1.florincoin.org',
  'node.oip.fun',
  'flodns.oip.li',
  'flodns.oip.fun',
  'flodns.seednode.net'
];

/**
 * Packet magic number.
 * @const {Number}
 * @default
 */

main.magic = 0xf1a5c0fd;

/**
 * Default network port.
 * @const {Number}
 * @default
 */

main.port = 7312;

/**
 * Checkpoint block list.
 * @const {Object}
 */

main.checkpointMap = {
  0: b('09c7781c9df90708e278c35d38ea5c9041d7ecfcdd1c56ba67274b7cff3e1cea'),
  8002: b('34927375cbedc5fb2ede80423021bb733b0cf832956c397f79bf9bd9163bbc73'),
  18001: b('821503f14c4ec624b69ce762678c1a994dfae919832fea3deec74faa21487a5a'),
  38002: b('401e79b77fd0abf129137e51f12a12f820f28fd30ce4c1440f450a6d7c436249'),
  100000: b('fd49a7753e312efb6934b087081bc795bbfd9922d1cf2a1a87e6966b2c4efbc0'),
  160002: b('8f0f6ad2e82c8b3e9bbafb3e575b3e4dfcffa434b95fa0c3148629921c388d47'),
  200000: b('ec3014dc8b6bbf9c80771667d3ad33b47ecd1efc9f3a830f43d7a9f2c2b539a9'),
  208001: b('4c6da540dc63cd2174aa78bfee895d3ad72be48d5d9fafa0ef1a08d5b2f8b32b'),
  270001: b('6008f82de8ee151033d9e4072b50025285fcba713fe68659bc6bae79318a9874'),
  290036: b('a32d3c456604c850b6d66b2f793808673ba0e9acc1ad74560e4f5e1e38945914'),
  300000: b('fc4090120859e2ec8f344fccafe39a7e208b3cba03a158cd1a355e08c79aec77'),
  344665: b('adc1b951a715cd45330e5a067b8ced379a98b2991d6b9b52aa57c3ded836fe40'),
  400000: b('672c0ebc6ea69304f8c8eb1ccdc4c42e3dcfd2195286216136f98e3f5307ce7e'),
  400236: b('38efd4e7f4a5d12dd05fc4ffede76d96e8de281cf1f35fe43905411de2b8a4f9'),
  415000: b('a8c041eac4438f92f70f441c2f9ddada310ec0bdd555579a0300738ab98aef16'),
  420937: b('44849bb5c21c135d18a1e1a497e13319b650de391403a2ddc01e0287465ea748'),
  425606: b('5ea87477099b6cb9afd836d78d6f8dc9b148dc04d7deffda6f9fa4b111d8c862'),
  500000: b('0c1bba2676f22972b8d4a48310a60447ab1942ddbb28eb2f84d322e99596c4fe'),
  508694: b('6ada39770e22aa56fdce69d505e60d8cafcf6fdcdcdcc464518e11e997e1cd65'),
  600000: b('d24f5b7ea65db9edb001e79d6b9713472ded67813c99ce079cd267adf6f69265'),
  696454: b('76196ffe698f548038b15df2378e7506521e1fc12e52698f2fe205446875fb8c'),
  700000: b('9a4560c3872d9143745230113e740cbbb4a9fa2e43b63cbb84415ab22b9610ca'),
  800000: b('07930c98a9cb4a5ba3791ec805e64fd10c98d680c5958c0d7d87ba711eb38caf'),
  900000: b('af434a0c78d826b61c9835264a5f965bb9b617996b99aade4f202e9c61c9eb8d'),
  955000: b('26751e49ab4b2e30d3cd01932b67f6f3babc6232eeb40aeb59afe6ae507a51b5'),
  1000000: b('fd9409dfc4457d690b92c153ad4c0ea9ac8005c9ed26a61bdf4a37b42dd68bb6'),
  1100000: b('16edf57b45442f7eaabe515f3ac4cef9e59f819b843c68a82c389a5b331dd5a6'),
  1200000: b('088f39b49e7db714d4278d1793cd178d765b3ddab4b8bb06f36aaba50d1c16f2'),
  1300000: b('912b163388fbe6369e1a22d2ca921a63bfdbcbf3cd9f6e1ac6915fa316cc5137'),
  1400000: b('5f56ca1fad1c79e9cb58f5f1e3e10accccb3cc7ee3b21faceca9c06b4ea05a70'),
  1500000: b('f25105ee2249aaf94f93b49dd068c0ab7bb7d66987c2587d6a0bcd451a1f9630'),
  1505017: b('a7bfc5d33e06509bc70de2959e354ebb91437d74df0084c9a526bb5068308bd3'),
  1600000: b('caee977ec6e6d856eda84909b1f305345674c9219cc873aacd0b242298100d5b'),
  1678879: b('fc7666e28fc8a3255d3831faef97569f0ef7dc026c0e3f55b3dfe852284e871e'),
  1678909: b('8a05c5eddc23cfb5f7df90c334fc5121d76b34c8047971e642a537e340105a4c'),
  1679162: b('0fc11f48af54fed1b5f00ec027cdd7e12906b13d88bee1f36f19a480fb642cb3'),
  1700000: b('feba3d283205d7f2b66ce3ac5cde7e4db44cc3e702ce41f98e7f4c53f8184868'),
  1796633: b('45d4272fb6600e5b945a255586d7ba1e973d5fc4c6a02ae00d2c7f6a938bdac2'),
  1800000: b('90039841a5c44ff8c89c948a06cd69eece7e82ff4fd3c17cd515fff35c0b56cc'),
  1900000: b('6d5bc7b28d2387a52ea14e8e5b0a8062583e65d683a60507e1aed76c3b2e9160'),
  2000000: b('21d2e9dea1c735c68624e515955b7c3fb9ff3991facc70c2927c7b39cab58c4a'),
  2094558: b('813fe41c83461eb89465b5f9e111866fa8876d456858c1fa2bf38682c8166694'),
  2100000: b('015fce6c79ec955cf87e2c948d957096f28ab684bd61d16b0985936ab4ddb4ce'),
  2200000: b('587578080522585935d42996b1b12c33fc29b916f115da38024b1b28b09d99ae'),
  2300000: b('3808a15146976c4832025c405514e90787fa10d9f312731d231f96d50e73aca0'),
  2400000: b('d2e19b323d539a5edd85de0d13fe44c054aae33546079529d0db2874769bfb2d'),
  2500000: b('2e51213b29f09bf7dffe106c7286e5b0ff7437634fa9f27d35d43b968a768b47'),
  2532181: b('791c9359312f180f1204613541e925050b2141a797b91dae8810edaa4951cdca'),
  2600000: b('77bad12e7940c74f1514d66b2b8f455ac0992babee390236fabeea6b670151a3'),
  2700000: b('4384f467a9af8b7fa3efac8b36691be6bd4fca289935ce06a5a69a191b0e9f9e'),
  2800000: b('bdc1f13f345c7db604cf94ef4264f0d47f564fd98d5777741781bd53551ebcfc'),
  2900000: b('0593d51fa8fda98fd4a77fc1fe41eba19b841cc403f6987cf5245f9baca7304e'),
  3000000: b('7f8e94ae9f83221fa6230c530aa895e53ea04e38117417f081c6b1e302a3d35a'),
  3100000: b('fd07bdd12ba2e7a6e2b8924db588e51378542f10e7e860c192abc4658dac81db'),
  3200000: b('e9a37a7a543a495225eda8275f7a41088e64b12cb1e29f667a7584c55dbeb28c'),
  3300000: b('3df2ba30f5f857abc82efb18246c1c6e63dfa56238c67f1cc0326bf7292dcd96'),
  3400000: b('3e530c19dcf0449fc68d955392a9ae2e1ebb2948eb0c5ca03640804c4a26eddd'),
  3500000: b('014467023220f107225267c45eb06a44c6fcedb22c661fd8f72350524511aa25'),
  3550000: b('247c96b3531608b39f8725dad00463bd0a4d45e4428255294aa304cb968ba5e2')
};

/**
 * Last checkpoint height.
 * @const {Number}
 * @default
 */

// If updating this, please also update main.block.slowHeight to prevent logs being spammy
main.lastCheckpoint = 3550000;

/**
 * @const {Number}
 * @default
 */

main.halvingInterval = 800000;

/**
 * Genesis block header.
 * @const {Object}
 */

main.genesis = {
  version: 1,
  hash: b('09c7781c9df90708e278c35d38ea5c9041d7ecfcdd1c56ba67274b7cff3e1cea'),
  prevBlock: b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot: b('730f0c8ddc5a592d5512566890e2a73e45feaa6748b24b849d1c29a7ab2b2300'),
  time: 1371488396,
  bits: 504365040, // 0x1e0ffff0
  nonce: 1000112548,
  height: 0
};

/**
 * The network's genesis block in a hex string.
 * @const {String}
 */

main.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '0000232baba7291c9d844bb24867aafe453ea7e290685612552d595adc8d0c0f738c40'
  + 'bf51f0ff0f1ea4819c3b01020000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4904ffff001d010441536c617368646f7420'
  + '2d203137204a756e652032303133202d20536175646920417261626961205365742054'
  + '6f2042616e2057686174734170702c20536b797065ffffffff0100e40b540200000043'
  + '41040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d3eb4b10'
  + 'f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9ac000000'
  + '001d746578743a466c6f72696e636f696e2067656e6573697320626c6f636b';

/**
 * POW-related constants.
 * @enum {Number}
 * @default
 */

main.pow = {
  /**
   * Default target.
   * @const {BN}
   */

  limit: new BN(
    '00000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),

  /**
   * Compact pow limit.
   * @const {Number}
   * @default
   */

  bits: 504365055,

  /**
   * Minimum chainwork for best chain.
   * @const {BN}
   */

  chainwork: new BN(
    '00000000000000000000000000000000000000000000000011f1db4843f05806',
    'hex'
  ),

  /**
   * Average block time.
   * @const {Number}
   * @default
   */

  targetSpacing: 40,

  /**
   * Desired retarget period in seconds.
   * @const {Number}
   * @default
   */

  targetTimespan_Version1: 60 * 60,
  targetTimespan_Version2: 15 * 40,
  targetTimespan_Version3: 6 * 40,

  /**
   * Retarget interval in blocks.
   * @const {Number}
   * @default
   */

  retargetInterval_Version1: (60 * 60) / 40,
  retargetInterval_Version2: 15,
  retargetInterval_Version3: 1,

  /**
   * Average retarget interval in blocks.
   * @const {Number}
   * @default
   */

  averagingInterval_Version1: (60 * 60) / 40,
  averagingInterval_Version2: 15,
  averagingInterval_Version3: 6,

  /**
   * Average retarget interval in blocks.
   * @const {Number}
   * @default
   */

  averagingIntervalTimespan_Version1: (60 * 60) / 40,
  averagingIntervalTimespan_Version2: 15,
  averagingIntervalTimespan_Version3: 6,

  /**
   * Adjust Target Timespan Max.
   * @const {Number}
   * @default
   */

  adjustUp_Version1: 75,
  adjustUp_Version2: 75,
  adjustUp_Version3: 2,

  /**
   * Adjust Target Timespan Min.
   * @const {Number}
   * @default
   */

  adjustDown_Version1: 300,
  adjustDown_Version2: 300,
  adjustDown_Version3: 3,

  /**
   * Block Heights that each difficulty algorithm should be used
   * @const {Number}
   * @default
   */
  blockHeight_Version2: 208440,
  blockHeight_Version3: 426000,

  /**
   * Whether to reset target if a block
   * has not been mined recently.
   * @const {Boolean}
   * @default
   */

  targetReset: false,

  /**
   * Do not allow retargetting.
   * @const {Boolean}
   * @default
   */

  noRetargeting: false
};

/**
 * Block constants.
 * @enum {Number}
 * @default
 */

main.block = {
  /**
   * Height at which bip34 was activated.
   * Used for avoiding bip30 checks.
   */

  bip34height: 1679161,

  /**
   * Hash of the block that activated bip34.
   */

  bip34hash: b('490a10507efe42b89104408787088b7c43310cc230310201b5f57dac6f513b8b'),

  /**
   * Height at which bip65 was activated.
   */

  bip65height: 1679161,

  /**
   * Hash of the block that activated bip65.
   */

  bip65hash: b('490a10507efe42b89104408787088b7c43310cc230310201b5f57dac6f513b8b'),

  /**
   * Height at which bip66 was activated.
   */

  bip66height: 1679161,

  /**
   * Hash of the block that activated bip66.
   */

  bip66hash: b('490a10507efe42b89104408787088b7c43310cc230310201b5f57dac6f513b8b'),

  /**
   * Safe height to start pruning.
   */

  pruneAfterHeight: 1000,

  /**
   * Safe number of blocks to keep.
   */

  keepBlocks: 288,

  /**
   * Age used for the time delta to
   * determine whether the chain is synced.
   */

  maxTipAge: 24 * 60 * 60,

  /**
   * Height at which block processing is
   * slow enough that we can output
   * logs without spamming.
   */

  slowHeight: 3550000
};

/**
 * Map of historical blocks which create duplicate transactions hashes.
 * @see https://github.com/bitcoin/bips/blob/master/bip-0030.mediawiki
 * @const {Object}
 * @default
 */

main.bip30 = {};

/**
 * For versionbits.
 * @const {Number}
 * @default
 */

main.activationThreshold = 6048; // 75% of 8064

/**
 * Confirmation window for versionbits.
 * @const {Number}
 * @default
 */

main.minerWindow = 8064; // nPowTargetTimespan / nPowTargetSpacing * 4

/**
 * Deployments for versionbits.
 * @const {Object}
 * @default
 */

main.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1522562766, // April 1st, 2018
    timeout: 1554098766, // April 1st, 2019
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 1522562766, // April 1st, 2018
    timeout: 1554098766, // April 1st, 2019
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

/**
 * Deployments for versionbits (array form, sorted).
 * @const {Array}
 * @default
 */

main.deploys = [
  main.deployments.csv,
  main.deployments.segwit,
  main.deployments.testdummy
];

/**
 * Key prefixes.
 * @enum {Number}
 * @default
 */

main.keyPrefix = {
  privkey: 0xa3,
  xpubkey: 0x0134406b,
  xprivkey: 0x01343c31,
  xpubkey58: 'Fpub',
  xprivkey58: 'Fprv',
  coinType: 0
};

/**
 * {@link Address} prefixes.
 * @enum {Number}
 */

main.addressPrefix = {
  pubkeyhash: 0x23,
  scripthash: 0x5e,
  scripthash2: 0x08,
  witnesspubkeyhash: 0x06,
  witnessscripthash: 0x0a,
  bech32: 'flo'
};

/**
 * Default value for whether the mempool
 * accepts non-standard transactions.
 * @const {Boolean}
 * @default
 */

main.requireStandard = true;

/**
 * Default http port.
 * @const {Number}
 * @default
 */

main.rpcPort = 7313;

/**
 * Default wallet port.
 * @const {Number}
 * @default
 */

main.walletPort = 7315;

/**
 * Default min relay rate.
 * @const {Rate}
 * @default
 */

main.minRelay = 10000;

/**
 * Default normal relay rate.
 * @const {Rate}
 * @default
 */

main.feeRate = 1000000;

/**
 * Maximum normal relay rate.
 * @const {Rate}
 * @default
 */

main.maxFeeRate = 4000000;

/**
 * Whether to allow self-connection.
 * @const {Boolean}
 */

main.selfConnect = false;

/**
 * Whether to request mempool on sync.
 * @const {Boolean}
 */

main.requestMempool = false;

main.nlrLimit = 100 // 100 * ~40s = ~66 minutes

/*
 * Testnet (v3)
 * https://en.bitcoin.it/wiki/Testnet
 */

const testnet = {};

testnet.type = 'testnet';

testnet.seeds = [
  'testnet.oip.fun'
];

testnet.magic = 0xf25ac0fd;

testnet.port = 17312;

testnet.checkpointMap = {
  2056: b('484137382926862f600e0fe5f9c6e8a5a1fec22406f151a6ea1b7371b04d33d3'),
  10000: b('7938fd4a183b4d06234983cb0c1aace5e153ef37e335f80652ecd12c5f606890'),
  50000: b('070cf3309161205b8c3c99df1e556b1e86a0315ad811a7c9e4d12f693f1c9a62'),
  75000: b('5ab6b417eb612d6ec10cec0acd5d23a2b9d3ab78e3af06a438123bc193bb6da2'),
  100000: b('8813cf76021b3e6fc09d16f5d0d00fd9af8cf51c34064f22fe55e6061b755b91'),
  150000: b('c5e1afd50798f00c58ab7d9f785bb17cd3368fd7d704590af12f965ac0e79a2d'),
  200000: b('9fb320c2131c870496a8dcf946b682be9bbef9e78a421adde9b891ee0d9d56ac'),
  225000: b('12711469c9c5c06df598afad3fe173535bdd529ab08f907532162004c9e93527'),
  245000: b('159cb9befa6b3560db71d6fcfd5d75b11d986629723c9cf0485998653dc5bfd3'),
  300000: b('f602525e8eb7cd98d061b444025a816cd7f32fac4be21d9a89c621b04b7e4d24'),
  400000: b('5714fcff34cdf83f567db616bbc0d108ca548ffcfab7530114ca7fa94fbd0507'),
  500000: b('8987ddc3b37c0ab5d08d2f686d6986d13132c590619080f1264c74bce9fbe2ff'),
  600000: b('3e35f526bce485df26e15dda9c329d19205249b7849f5ceb7cadb50e642a001d'),
  686000: b('ba415faddfeef253c8c0e8fe3b6f2cb37d5b12416cb86491d62081abf179a79b')
};

// If updating this, please also update testnet.block.slowHeight to prevent logs being spammy
testnet.lastCheckpoint = 686000;

testnet.halvingInterval = 800000;

testnet.genesis = {
  version: 1,
  hash: b('9b7bc86236c34b5e3a39367c036b7fe8807a966c22a7a1f0da2a198a27e03731'),
  prevBlock: b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot: b('730f0c8ddc5a592d5512566890e2a73e45feaa6748b24b849d1c29a7ab2b2300'),
  time: 1371387277,
  bits: 504365040,
  nonce: 1000580675,
  height: 0
};

testnet.genesisBlock =
  '010000000000000000000000000000000000000000000000000000000000000000000'
  + '00000232baba7291c9d844bb24867aafe453ea7e290685612552d595adc8d0c0f738d'
  + 'b5bd51f0ff0f1e43a6a33b01020000000100000000000000000000000000000000000'
  + '00000000000000000000000000000ffffffff4904ffff001d010441536c617368646f'
  + '74202d203137204a756e652032303133202d205361756469204172616269612053657'
  + '420546f2042616e2057686174734170702c20536b797065ffffffff0100e40b540200'
  + '00004341040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d'
  + '3eb4b10f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9'
  + 'ac000000001d746578743a466c6f72696e636f696e2067656e6573697320626c6f636b';

testnet.pow = {
  limit: new BN(
    '00000fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 504365055,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000003dd47d3172',
    'hex'
  ),
  targetSpacing: 40,

  /**
   * Desired retarget period in seconds.
   * @const {Number}
   * @default
   */

  targetTimespan_Version1: 60 * 60,
  targetTimespan_Version2: 15 * 40,
  targetTimespan_Version3: 6 * 40,

  /**
   * Retarget interval in blocks.
   * @const {Number}
   * @default
   */

  retargetInterval_Version1: (60 * 60) / 40,
  retargetInterval_Version2: 15,
  retargetInterval_Version3: 1,

  /**
   * Average retarget interval in blocks.
   * @const {Number}
   * @default
   */

  averagingInterval_Version1: (60 * 60) / 40,
  averagingInterval_Version2: 15,
  averagingInterval_Version3: 6,

  /**
   * Average retarget interval in blocks.
   * @const {Number}
   * @default
   */

  averagingIntervalTimespan_Version1: (60 * 60) / 40,
  averagingIntervalTimespan_Version2: 15,
  averagingIntervalTimespan_Version3: 6,

  /**
   * Adjust Target Timespan Max.
   * @const {Number}
   * @default
   */

  adjustUp_Version1: 75,
  adjustUp_Version2: 75,
  adjustUp_Version3: 2,

  /**
   * Adjust Target Timespan Min.
   * @const {Number}
   * @default
   */

  adjustDown_Version1: 300,
  adjustDown_Version2: 300,
  adjustDown_Version3: 3,

  /**
   * Block Heights that each difficulty algorithm should be used
   * @const {Number}
   * @default
   */
  blockHeight_Version2: 50000,
  blockHeight_Version3: 60000,

  targetReset: true,
  noRetargeting: false
};

testnet.block = {
  bip34height: 33600,
  bip34hash: b('4ac31d938531317c065405a9b23478c8c99204ff17fc294cb09821e2c2b42e65'),
  bip65height: 33600,
  bip65hash: b('4ac31d938531317c065405a9b23478c8c99204ff17fc294cb09821e2c2b42e65'),
  bip66height: 33600,
  bip66hash: b('4ac31d938531317c065405a9b23478c8c99204ff17fc294cb09821e2c2b42e65'),
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 24 * 60 * 60,
  slowHeight: 686000
};

testnet.bip30 = {};

testnet.activationThreshold = 600; // 75% for testchains

testnet.minerWindow = 800; // nPowTargetTimespan / nPowTargetSpacing

testnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 1483228800, // January 1, 2017
    timeout: 1530446401, // July 1, 2018
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 1483228800, // January 1, 2017
    timeout: 1530446401, // July 1, 2018
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

testnet.deploys = [
  testnet.deployments.csv,
  testnet.deployments.segwit,
  testnet.deployments.testdummy
];

testnet.keyPrefix = {
  privkey: 0xef,
  xpubkey: 0x013440e2,
  xprivkey: 0x01343c23,
  xpubkey58: 'Fput',
  xprivkey58: 'Fprt',
  coinType: 1
};

testnet.addressPrefix = {
  pubkeyhash: 0x73,
  scripthash: 0xc6,
  scripthash2: 0x3a,
  witnesspubkeyhash: 0x03,
  witnessscripthash: 0x28,
  bech32: 'tflo'
};

testnet.requireStandard = false;

testnet.rpcPort = 17313;

testnet.walletPort = 17315;

testnet.minRelay = 1000;

testnet.feeRate = 20000;

testnet.maxFeeRate = 60000;

testnet.selfConnect = false;

testnet.requestMempool = false;

testnet.nlrLimit = 50; // 50 * ~40s = ~33 minutes

/*
 * Regtest
 */

const regtest = {};

regtest.type = 'regtest';

regtest.seeds = [];

regtest.magic = 0xdab5bffa;

regtest.port = 17412;

regtest.checkpointMap = {};
regtest.lastCheckpoint = 0;

regtest.halvingInterval = 150;

regtest.genesis = {
  version: 1,
  hash: b('ec42fa26ca6dcb1103b59a1d24b161935ea4566f8d5736db8917d5b9a8dee0d7'),
  prevBlock: b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot: b('730f0c8ddc5a592d5512566890e2a73e45feaa6748b24b849d1c29a7ab2b2300'),
  time: 1371387277,
  bits: 545259519,
  nonce: 0,
  height: 0
};

// @TODO: Add Genesis Block hex for Flo Regtest
regtest.genesisBlock =
  '010000000000000000000000000000000000000000000000000000000000000000000'
  + '00000232baba7291c9d844bb24867aafe453ea7e290685612552d595adc8d0c0f738d'
  + 'b5bd51ffff7f200000000001020000000100000000000000000000000000000000000'
  + '00000000000000000000000000000ffffffff4904ffff001d010441536c617368646f'
  + '74202d203137204a756e652032303133202d205361756469204172616269612053657'
  + '420546f2042616e2057686174734170702c20536b797065ffffffff0100e40b540200'
  + '00004341040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d'
  + '3eb4b10f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9'
  + 'ac000000001d746578743a466c6f72696e636f696e2067656e6573697320626c6f636b';

regtest.pow = {
  limit: new BN(
    '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000000',
    'hex'
  ),

  targetSpacing: 40,

  /**
   * Desired retarget period in seconds.
   * @const {Number}
   * @default
   */

  targetTimespan_Version1: 60 * 60,
  targetTimespan_Version2: 15 * 40,
  targetTimespan_Version3: 6 * 40,

  /**
   * Retarget interval in blocks.
   * @const {Number}
   * @default
   */

  retargetInterval_Version1: (60 * 60) / 40,
  retargetInterval_Version2: 15,
  retargetInterval_Version3: 1,

  /**
   * Average retarget interval in blocks.
   * @const {Number}
   * @default
   */

  averagingInterval_Version1: (60 * 60) / 40,
  averagingInterval_Version2: 15,
  averagingInterval_Version3: 6,

  /**
   * Average retarget interval in blocks.
   * @const {Number}
   * @default
   */

  averagingIntervalTimespan_Version1: (60 * 60) / 40,
  averagingIntervalTimespan_Version2: 15,
  averagingIntervalTimespan_Version3: 6,

  /**
   * Adjust Target Timespan Max.
   * @const {Number}
   * @default
   */

  adjustUp_Version1: 75,
  adjustUp_Version2: 75,
  adjustUp_Version3: 2,

  /**
   * Adjust Target Timespan Min.
   * @const {Number}
   * @default
   */

  adjustDown_Version1: 300,
  adjustDown_Version2: 300,
  adjustDown_Version3: 3,

  /**
   * Block Heights that each difficulty algorithm should be used
   * @const {Number}
   * @default
   */
  blockHeight_Version2: 208440,
  blockHeight_Version3: 426000,

  targetReset: true,
  noRetargeting: true
};

regtest.block = {
  bip34height: 0xffffffff,
  bip34hash: null,
  bip65height: 1351,
  bip65hash: null,
  bip66height: 1251,
  bip66hash: null,
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

regtest.bip30 = {};

regtest.activationThreshold = 108; // 75% for testchains

regtest.minerWindow = 144; // Faster than normal for regtest

regtest.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 0,
    timeout: 0xffffffff,
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

regtest.deploys = [
  regtest.deployments.csv,
  regtest.deployments.segwit,
  regtest.deployments.testdummy
];

regtest.keyPrefix = {
  privkey: 0xef,
  xpubkey: 0x043587cf,
  xprivkey: 0x04358394,
  xpubkey58: 'xpub',
  xprivkey58: 'xprv',
  coinType: 1
};

regtest.addressPrefix = {
  pubkeyhash: 0x73,
  scripthash: 0xc6,
  scripthash2: 0x3a,
  witnesspubkeyhash: 0x03,
  witnessscripthash: 0x28,
  bech32: 'rflo'
};

regtest.requireStandard = false;

regtest.rpcPort = 17413;

regtest.walletPort = 17415;

regtest.minRelay = 1000;

regtest.feeRate = 20000;

regtest.maxFeeRate = 60000;

regtest.selfConnect = true;

regtest.requestMempool = true;

regtest.nlrLimit = 10;

/*
 * Simnet (btcd)
 */

const simnet = {};

simnet.type = 'simnet';

simnet.seeds = [
  '127.0.0.1'
];

simnet.magic = 0x12141c16;

simnet.port = 18555;

simnet.checkpointMap = {};

simnet.lastCheckpoint = 0;

simnet.halvingInterval = 210000;

simnet.genesis = {
  version: 1,
  hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  prevBlock:
    b('0000000000000000000000000000000000000000000000000000000000000000'),
  merkleRoot:
    b('3ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a'),
  time: 1401292357,
  bits: 545259519,
  nonce: 2,
  height: 0
};

simnet.genesisBlock =
  '0100000000000000000000000000000000000000000000000000000000000000000000'
  + '003ba3edfd7a7b12b27ac72c3e67768f617fc81bc3888a51323a9fb8aa4b1e5e4a4506'
  + '8653ffff7f200200000001010000000100000000000000000000000000000000000000'
  + '00000000000000000000000000ffffffff4d04ffff001d0104455468652054696d6573'
  + '2030332f4a616e2f32303039204368616e63656c6c6f72206f6e206272696e6b206f66'
  + '207365636f6e64206261696c6f757420666f722062616e6b73ffffffff0100f2052a01'
  + '000000434104678afdb0fe5548271967f1a67130b7105cd6a828e03909a67962e0ea1f'
  + '61deb649f6bc3f4cef38c4f35504e51ec112de5c384df7ba0b8d578a4c702b6bf11d5f'
  + 'ac00000000';

simnet.pow = {
  limit: new BN(
    // High target of 0x207fffff (545259519)
    '7fffff0000000000000000000000000000000000000000000000000000000000',
    'hex'
  ),
  bits: 545259519,
  chainwork: new BN(
    '0000000000000000000000000000000000000000000000000000000000000002',
    'hex'
  ),
  targetTimespan: 3.5 * 24 * 60 * 60,
  targetSpacing: 2.5 * 60,
  retargetInterval: 2016,
  targetReset: true,
  noRetargeting: false
};

simnet.block = {
  bip34height: 0,
  bip34hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  bip65height: 0,
  bip65hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  bip66height: 0,
  bip66hash:
    b('f67ad7695d9b662a72ff3d8edbbb2de0bfa67b13974bb9910d116d5cbd863e68'),
  pruneAfterHeight: 1000,
  keepBlocks: 10000,
  maxTipAge: 0xffffffff,
  slowHeight: 0
};

simnet.bip30 = {};

simnet.activationThreshold = 75; // 75% for testchains

simnet.minerWindow = 100; // nPowTargetTimespan / nPowTargetSpacing

simnet.deployments = {
  csv: {
    name: 'csv',
    bit: 0,
    startTime: 0, // March 1st, 2016
    timeout: 0xffffffff, // May 1st, 2017
    threshold: -1,
    window: -1,
    required: false,
    force: true
  },
  segwit: {
    name: 'segwit',
    bit: 1,
    startTime: 0, // May 1st 2016
    timeout: 0xffffffff, // May 1st 2017
    threshold: -1,
    window: -1,
    required: true,
    force: false
  },
  segsignal: {
    name: 'segsignal',
    bit: 4,
    startTime: 0xffffffff,
    timeout: 0xffffffff,
    threshold: 269,
    window: 336,
    required: false,
    force: false
  },
  testdummy: {
    name: 'testdummy',
    bit: 28,
    startTime: 1199145601, // January 1, 2008
    timeout: 1230767999, // December 31, 2008
    threshold: -1,
    window: -1,
    required: false,
    force: true
  }
};

simnet.deploys = [
  simnet.deployments.csv,
  simnet.deployments.segwit,
  simnet.deployments.segsignal,
  simnet.deployments.testdummy
];

simnet.keyPrefix = {
  privkey: 0x64,
  xpubkey: 0x0420bd3a,
  xprivkey: 0x0420b900,
  xpubkey58: 'spub',
  xprivkey58: 'sprv',
  coinType: 115
};

simnet.addressPrefix = {
  pubkeyhash: 0x3f,
  scripthash: 0x7b,
  witnesspubkeyhash: 0x19,
  witnessscripthash: 0x28,
  bech32: 'sb'
};

simnet.requireStandard = false;

simnet.rpcPort = 18556;

simnet.walletPort = 18558;

simnet.minRelay = 1000;

simnet.feeRate = 20000;

simnet.maxFeeRate = 60000;

simnet.selfConnect = false;

simnet.requestMempool = false;

/*
 * Expose
 */

network.main = main;
network.testnet = testnet;
network.regtest = regtest;
network.simnet = simnet;
