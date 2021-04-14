var Insight = require("../lib").Insight;

var explorer = new Insight("https://bitsight.mk1.alexandria.io/api")

explorer.onTX((message) => {
	console.log(message)
})