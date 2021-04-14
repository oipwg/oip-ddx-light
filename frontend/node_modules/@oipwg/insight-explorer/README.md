[![](https://travis-ci.org/oipwg/insight-explorer.svg?branch=master)](https://travis-ci.org/oipwg/insight-explorer)
[![](https://img.shields.io/npm/v/insight-explorer.svg)](https://www.npmjs.com/package/insight-explorer)
# Insight Explorer

A simple NPM Module to get data back easily from any coins [Insight API](https://github.com/bitpay/insight-api) server. Created as a more compatable "open" version, vs being locked to a specific coin.

This module connects to a running Insight API service. If you're looking for information on how to run your own node, take a look at https://github.com/bitpay/insight-api.

## Installation

To add the Insight Explorer to your project, just install it with your favorite package manager. For example, using the default NPM you can install it like this.

```bashl
npm install --save insight-explorer
```


## Usage Instructions

To use the Insight explorer, first import the package into your node application.

```javascript
import { Insight } from 'insight-explorer'
```

After you have imported the package, you will then need to create a new Insight object and give it your Insight API URL.

```javascript
let explorer = new Insight("https://livenet.flocha.in/api")
```

Now that we have created our Insight Explorer with the Insight API URL, we can query data from the blockchain.

### Block

You can get a block back by querying based on its hash.

```javascript
explorer.getBlock("block_hash").then(function(block){
    console.log(block);
})
```

### Block Index
Get block hash by height
```javascript
explorer.getBlockIndex("block_height").then(function(block){
    console.log(block);
})
```
This would return:
```json
{
  "blockHash":"block_hash"
}
```

### Raw Block
```javascript
explorer.getRawBlock("block_hash").then(function(block){
    console.log(block);
})
```

This would return:
```json
{
  "rawblock":"blockhexstring..."
}
```

### Block Summaries

Get block summaries by date:
```javascript
explorer.getBlockSummary(3, "2016-04-21").then(function(blocks){
    console.log(blocks);
})
```

Example response:
```json
{
  "blocks": [
    {
      "height": 408495,
      "size": 989237,
      "hash": "00000000000000000108a1f4d4db839702d72f16561b1154600a26c453ecb378",
      "time": 1461360083,
      "txlength": 1695,
      "poolInfo": {
        "poolName": "BTCC Pool",
        "url": "https://pool.btcc.com/"
      }
    }
  ],
  "length": 1,
  "pagination": {
    "next": "2016-04-23",
    "prev": "2016-04-21",
    "currentTs": 1461369599,
    "current": "2016-04-22",
    "isToday": true,
    "more": true,
    "moreTs": 1461369600
  }
}
```

### Transaction
```javascript
explorer.getTransaction("txid").then(function(tx){
    console.log(tx);
})
```

### Address
```javascript
explorer.getAddress("address").then(function(addr){
    console.log(addr);
})
```

### Address Properties

The four supported Properties that you can use are `balance`, `totalReceived`, `totalSent`, and `unconfirmedBalance`.

```javascript
explorer.getAddressProperties("address", "balance").then(function(prop){
    console.log(prop);
})
```
The response contains the value in Satoshis.

### Unspent Outputs
```javascript
explorer.getAddressUtxo("address").then(function(utxos){
    console.log(utxos);
})
```
Sample return:
```javascript
[
  {
    "address":"mo9ncXisMeAoXwqcV5EWuyncbmCcQN4rVs",
    "txid":"d5f8a96faccf79d4c087fa217627bb1120e83f8ea1a7d84b1de4277ead9bbac1",
    "vout":0,
    "scriptPubKey":"76a91453c0307d6851aa0ce7825ba883c6bd9ad242b48688ac",
    "amount":0.000006,
    "satoshis":600,
    "confirmations":0,
    "ts":1461349425
  },
  {
    "address": "mo9ncXisMeAoXwqcV5EWuyncbmCcQN4rVs",
    "txid": "bc9df3b92120feaee4edc80963d8ed59d6a78ea0defef3ec3cb374f2015bfc6e",
    "vout": 1,
    "scriptPubKey": "76a91453c0307d6851aa0ce7825ba883c6bd9ad242b48688ac",
    "amount": 0.12345678,
    "satoshis": 12345678,
    "confirmations": 1,
    "height": 300001
  }
]
```

### Unspent Outputs for Multiple Addresses
```javascript
explorer.getAddressesUtxo(["address1", "address2"]).then(function(utxos){
    console.log(utxos);
})
```

### Transactions by Block
```javascript
explorer.getTransactionsForBlock("block_hash").then(function(txs){
    console.log(txs);
})
```
### Transactions by Address
```javascript
explorer.getTransactionsForAddress("address").then(function(txs){
    console.log(txs);
})
```

### Transactions for Multiple Addresses

```javascript
explorer.getTransactionsForAddresses(["address1", "address2"], options).then(function(txs){
    console.log(txs);
})
```

##### Options

```
from (optional): 0
to (optional): 20
noAsm (optional): 1 (will omit script asm from results)
noScriptSig (optional): 1 (will omit the scriptSig from all inputs)
noSpent (option): 1 (will omit spent information per output)
```

##### Sample output

```
{ totalItems: 100,
  from: 0,
  to: 20,
  items:
    [ { txid: '3e81723d069b12983b2ef694c9782d32fca26cc978de744acbc32c3d3496e915',
       version: 1,
       locktime: 0,
       vin: [Object],
       vout: [Object],
       blockhash: '00000000011a135e5277f5493c52c66829792392632b8b65429cf07ad3c47a6c',
       confirmations: 109367,
       time: 1393659685,
       blocktime: 1393659685,
       valueOut: 0.3453,
       size: 225,
       firstSeenTs: undefined,
       valueIn: 0.3454,
       fees: 0.0001 },
      { ... },
      { ... },
      ...
      { ... }
    ]
 }
```

Note: if pagination params are not specified, the result is an array of transactions.

### Transaction Broadcasting
```javascript
explorer.broadcastRawTransaction("raw_tx_hex").then(function(res){
    console.log(res);
})
```
##### Sample response

```
  {
      txid: [:txid]
  }

  eg

  {
      txid: "c7736a0a0046d5a8cc61c8c3c2821d4d7517f5de2bc66a966011aaa79965ffba"
  }
```

### Historic Blockchain Data Sync Status
```javascript
explorer.getSync().then(function(info){
    console.log(info);
})
```

### Live Network P2P Data Sync Status
```javascript
explorer.getPeer().then(function(info){
    console.log(info);
})
```

### Status of the Bitcoin Network
```javascript
explorer.getStatus("option").then(function(info){
    console.log(info);
})
```

### Get Exchange Rate
```javascript
explorer.getExchangeRate().then(function(info){
    console.log(info);
})
```

Where `option` can be:

 * getInfo
 * getDifficulty
 * getBestBlockHash
 * getLastBlockHash


### Utility Methods
```javascript
explorer.estimateFee(nbBlocks).then(function(fee){
    console.log(fee);
})
```

### Listen for new Transactions
This is sent anytime a transaction gets added to the mempool
```javascript
explorer.onTX(function(tx){
    console.log("Transaction Recieved! ", tx);
})
```

### Listen for new Blocks
This is sent anytime a block gets added to the chain
```javascript
explorer.onBlock(function(block){
    console.log("Block Recieved! ", block);
})
```

### Listen for Address updates
This is sent anytime an address recieves or spends a transaction. If the address was used in a spend, the `type` will be `seen_in_tx_input`, if the address recieved funds, the `type` will be `seen_in_tx_output`.

```javascript
explorer.onAddressUpdate("odqpABssS7twQfwqNhQdb58c8RiG6awnCh", function(tx){
    console.log("Address Update for odqpABssS7twQfwqNhQdb58c8RiG6awnCh Recieved! ", tx);
})
```

Example Output
```
{ 
    type: 'seen_in_tx_output',
    txid: '2ffaefefe962698653160d135ee43c34d22487c47949cc944cf6f05436ee2b93',
    updated_data: { 
        addrStr: 'odqpABssS7twQfwqNhQdb58c8RiG6awnCh',
        balance: 4.84555612,
        balanceSat: 484555612,
        totalReceived: 8.84422124,
        totalReceivedSat: 884422124,
        totalSent: 3.99866512,
        totalSentSat: 399866512,
        unconfirmedBalance: 0.132,
        unconfirmedBalanceSat: 13200000,
        unconfirmedTxApperances: 1,
        txApperances: 57 
    } 
}
```

## License
(The MIT License)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
