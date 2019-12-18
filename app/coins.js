var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var prcx = require("./coins/prcx.js");

module.exports = {
	"BTC": btc,
	"LTC": ltc,
	"PRCX": prcx,

	"coins":["BTC", "LTC", "PRCX"]
};
