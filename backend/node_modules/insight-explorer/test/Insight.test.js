var Insight = require("../lib").Insight;

var explorer = new Insight("https://livenet.flocha.in/api", false)

test("getBlock", (done) => {
	explorer.getBlock("628c568ca24b1b89d38a03fca447541b49479b9427e2ed13a55c872e5cb2fe63").then((block) => {
		expect(block.hash).toBe("628c568ca24b1b89d38a03fca447541b49479b9427e2ed13a55c872e5cb2fe63")
		expect(block.size).toBe(317)
		expect(block.height).toBe(2780228)
		expect(block.version).toBe(536870912)
		done()
	})
})

test("getBlockIndex", (done) => {
	explorer.getBlockIndex(2780228).then((block) => {
		expect(block.blockHash).toBe("628c568ca24b1b89d38a03fca447541b49479b9427e2ed13a55c872e5cb2fe63")
		done()
	})
})

test("getRawBlock", (done) => {
	explorer.getRawBlock("628c568ca24b1b89d38a03fca447541b49479b9427e2ed13a55c872e5cb2fe63").then((block) => {
		expect(block.rawblock).toBe("00000020b2e8bdae0b6f9dc380b06b855bbff323a8481766e3003cba05ab02c37f152e3cb1651707f947b9fba56b72cdb64a8fc18a46bfc9269a02a52bf8644e311d9af2ccc1115b0e380f1b1254a33f0102000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4c03446c2a04b4c1115b08fabe6d6d2039c8336e197f8d6a8c049920f506ed17ab5b273af6cd8263f2efa532be6b37010000000000000077ffffc6030000000d2f6e6f64655374726174756d2f00000000020000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf9807c814a000000001976a91485143d1e525f665f0e6ab306e7f61a3a710988bc88ac000000001b68747470733a2f2f7777772e6d696e696e672d64757463682e6e6c")
		done()
	})
})

test("getBlockSummary", (done) => {
	explorer.getBlockSummary(2, "2018-01-01").then((res) => {
		expect(res.blocks).toEqual([
			{  
				"height":2523155,
				"size":466,
				"virtualSize":466,
				"hash":"07bbde41cd7e1846bca8535a892fe2f74ebf71c0fbc35eb14fad2bba6a30d45e",
				"time":1514850719,
				"txlength": 2,
				"poolInfo":{}
			},
			{  
				"height":2523154,
				"size":241,
				"virtualSize":241,
				"hash":"5d4c507ca6dca215b7d1567b822135eee1820b2fe04c3729cf2a4bb0dca21cff",
				"time":1514850654,
				"txlength":1,
				"poolInfo":{}
			}
		])
		done()
	})
})

test("getTransaction", (done) => {
	explorer.getTransaction("f29a1d314e64f82ba5029a26c9bf468ac18f4ab6cd726ba5fbb947f9071765b1").then((tx) => {
		expect(tx.txid).toBe("f29a1d314e64f82ba5029a26c9bf468ac18f4ab6cd726ba5fbb947f9071765b1")
		expect(tx.version).toBe(2)
		expect(tx.floData).toBe("https://www.mining-dutch.nl")
		expect(tx.blockhash).toBe("628c568ca24b1b89d38a03fca447541b49479b9427e2ed13a55c872e5cb2fe63")
		done()
	})
})

test("getRawTransaction", (done) => {
	explorer.getRawTransaction("f29a1d314e64f82ba5029a26c9bf468ac18f4ab6cd726ba5fbb947f9071765b1").then((tx) => {
		expect(tx.rawtx).toBe("02000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4c03446c2a04b4c1115b08fabe6d6d2039c8336e197f8d6a8c049920f506ed17ab5b273af6cd8263f2efa532be6b37010000000000000077ffffc6030000000d2f6e6f64655374726174756d2f00000000020000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf9807c814a000000001976a91485143d1e525f665f0e6ab306e7f61a3a710988bc88ac000000001b68747470733a2f2f7777772e6d696e696e672d64757463682e6e6c")
		done()
	})
})

test("getAddress", (done) => {
	explorer.getAddress("FBkGd8vUUPzybvDJmm8N22BTafEo7BjVre").then((address) => {
		expect(address.addrStr).toBe("FBkGd8vUUPzybvDJmm8N22BTafEo7BjVre")
		expect(address.txApperances >= 1).toBe(true)
		done()
	})
})

test("getAddressProperties balance", (done) => {
	explorer.getAddressProperties("FBkGd8vUUPzybvDJmm8N22BTafEo7BjVre", "balance").then((amount) => {
		expect(amount >= 0).toBe(true)
		done()
	})
})

test("getAddressProperties totalReceived", (done) => {
	explorer.getAddressProperties("FBkGd8vUUPzybvDJmm8N22BTafEo7BjVre", "totalReceived").then((amount) => {
		expect(amount >= 125869953).toBe(true)
		done()
	})
})

test("getAddressProperties totalSent", (done) => {
	explorer.getAddressProperties("FBkGd8vUUPzybvDJmm8N22BTafEo7BjVre", "totalSent").then((amount) => {
		expect(amount >= 0).toBe(true)
		done()
	})
})

test("getAddressProperties unconfirmedBalance", (done) => {
	explorer.getAddressProperties("FBkGd8vUUPzybvDJmm8N22BTafEo7BjVre", "unconfirmedBalance").then((amount) => {
		expect(amount >= 0).toBe(true)
		done()
	})
})

test("getAddressUtxo", (done) => {
	explorer.getAddressUtxo("FFrfhbjbqgVNs6WYatav2wnb7LrCcmyDmm").then((utxos) => {
		expect(utxos[0].txid).toBe("96ff94c61ab95312d8ae483f91ff28f49de4e2d2371ff182168ebfbdc5f54faf")
		expect(utxos[0].scriptPubKey).toBe("76a9146dfc95ab490ec5090c1023043d2dc577b9d8be8988ac")
		expect(utxos[0].amount).toBe(0.001)
		done()
	})
})

test("getAddressesUtxo", (done) => {
	explorer.getAddressesUtxo(["FHQvhgDut1rn1nvQRZ3z9QgMEVMavRo2Tu", "FFrfhbjbqgVNs6WYatav2wnb7LrCcmyDmm"]).then((utxos) => {
		var match = false;
		for (utx of utxos){
			if (utx.txid === "96ff94c61ab95312d8ae483f91ff28f49de4e2d2371ff182168ebfbdc5f54faf" || utx.txid === "714a1eb73a6e0ee9ec6b73b85f852e3ed4bd68ddf2e0e1f4bcef12ca36ba506c")
				match = true;
		}
		expect(match).toBe(true);
		done()
	})
})

test("getTransactionsForBlock", (done) => {
	explorer.getTransactionsForBlock("628c568ca24b1b89d38a03fca447541b49479b9427e2ed13a55c872e5cb2fe63").then((res) => {
		expect(res.txs[0].txid).toBe("f29a1d314e64f82ba5029a26c9bf468ac18f4ab6cd726ba5fbb947f9071765b1")
		done()
	})
})

test("getTransactionsForAddress", (done) => {
	explorer.getTransactionsForAddress("FFrfhbjbqgVNs6WYatav2wnb7LrCcmyDmm").then((res) => {
		expect(res.txs[0].txid).toBe("96ff94c61ab95312d8ae483f91ff28f49de4e2d2371ff182168ebfbdc5f54faf")
		expect(res.txs[0].floData).toBe("text:Insight Tests")
		done()
	})
})

test("getTransactionsForAddresses", (done) => {
	explorer.getTransactionsForAddresses(["FUKsiTMSwLFqMoyJXPeeKEoPnHzZrndScJ", "FFrfhbjbqgVNs6WYatav2wnb7LrCcmyDmm"]).then((res) => {
		expect(res.items[0].txid).toBe("7687e361f00998f96b29938bf5b7d9003a15ec182c13b6ddbd5adc0f993cbf9c")
		expect(res.items[1].txid).toBe("96ff94c61ab95312d8ae483f91ff28f49de4e2d2371ff182168ebfbdc5f54faf")
		done()
	})
})

test("broadcastRawTransaction", (done) => {
	explorer.broadcastRawTransaction("02000000010000000000000000000000000000000000000000000000000000000000000000ffffffff4c03446c2a04b4c1115b08fabe6d6d2039c8336e197f8d6a8c049920f506ed17ab5b273af6cd8263f2efa532be6b37010000000000000077ffffc6030000000d2f6e6f64655374726174756d2f00000000020000000000000000266a24aa21a9ede2f61c3f71d1defd3fa999dfa36953755c690689799962b48bebd836974e8cf9807c814a000000001976a91485143d1e525f665f0e6ab306e7f61a3a710988bc88ac000000001b68747470733a2f2f7777772e6d696e696e672d64757463682e6e6c").then((res) => {
		expect(res.txid).toBe("f29a1d314e64f82ba5029a26c9bf468ac18f4ab6cd726ba5fbb947f9071765b1")
		done()
	})
})

test("getSync", (done) => {
	explorer.getSync().then((res) => {
		expect(res.blockChainHeight >= 2780247).toBe(true)
		done()
	})
})

test("getPeer", (done) => {
	explorer.getPeer().then((res) => {
		expect(res.connected).toBe(true)
		done()
	})
})

test("getStatus", (done) => {
	explorer.getStatus("getInfo").then((res) => {
		expect(res.info.blocks >= 2780247).toBe(true)
		done()
	})
})

test("getExchangeRate", (done) => {
	explorer.getExchangeRate().then((res) => {
		expect(res.data).toBeDefined()
		done()
	})
})

test("websocket, onTX", (done) => {
	var websocketExplorer = new Insight("https://localbitcoinschain.com/api")
	websocketExplorer.onTX((message) => {
		expect(message).toBeDefined()

		// Disconnect the websocket so it doesn't run and bug jest :p
		websocketExplorer.socket.disconnect();
		done()
	})
// This could take a while(?)
}, 10000)