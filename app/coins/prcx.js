var Decimal = require("decimal.js");
Decimal8 = Decimal.clone({ precision:8, rounding:8 });

var currencyUnits = [
	{
		type:"native",
		name:"PRCX",
		multiplier:1,
		default:true,
		values:["", "prcx", "PRCX"],
		decimalPlaces:8
	},
	{
		type:"native",
		name:"lite",
		multiplier:1000,
		values:["lite"],
		decimalPlaces:5
	},
	{
		type:"native",
		name:"photon",
		multiplier:1000000,
		values:["photon"],
		decimalPlaces:2
	},
	{
		type:"native",
		name:"litoshi",
		multiplier:100000000,
		values:["litoshi", "lit"],
		decimalPlaces:0
	},
	{
		type:"exchanged",
		name:"USD",
		multiplier:"usd",
		values:["usd"],
		decimalPlaces:2,
		symbol:"$"
	},
];

module.exports = {
	name:"PricecoinX",
	ticker:"PRCX",
	logoUrl:"/img/logo/prcx.svg",
	siteTitle:"PricecoinX Explorer",
	nodeTitle:"PricecoinX Full Node",
	nodeUrl:"https://pricecoincrpyto.com/",
	demoSiteUrl: "NoDemo",
	miningPoolsConfigUrls:[
		"https://raw.githubusercontent.com/hashstream/pools/master/pools.json",
	],
	maxBlockWeight: 4000000,
	targetBlockTimeSeconds: 30,
	currencyUnits:currencyUnits,
	currencyUnitsByName:{"PRCX":currencyUnits[0], "lite":currencyUnits[1], "photon":currencyUnits[2], "litoshi":currencyUnits[3]},
	baseCurrencyUnit:currencyUnits[3],
	defaultCurrencyUnit:currencyUnits[0],
	feeSatoshiPerByteBucketMaxima: [5, 10, 25, 50, 100, 150, 200, 250],
	genesisBlockHash: "e96fe042f9a306b109b7276c47488fceafcbd98a4456676bcf42307087af30f2",
	genesisCoinbaseTransactionId: "d6e9a320e9aa8aef4618a7a7c3fa99c971c1cf936d512031e60fcd8ea83e6744",
	genesisCoinbaseTransaction: {
		"txid":"d6e9a320e9aa8aef4618a7a7c3fa99c971c1cf936d512031e60fcd8ea83e6744",
		"hash":"d6e9a320e9aa8aef4618a7a7c3fa99c971c1cf936d512031e60fcd8ea83e6744",
		"blockhash":"e96fe042f9a306b109b7276c47488fceafcbd98a4456676bcf42307087af30f2",
		"version":1,
		"locktime":0,
		"size":199,
		"vsize":199,
		"time":157104839,
		"blocktime":157104839,
		"vin":[
			{
				"prev_out":{
					"hash":"0000000000000000000000000000000000000000000000000000000000000000",
					"n":4294967295
				},
				"coinbase":"04ffff001d0104404e592054696d65732030352f4f63742f32303131205374657665204a6f62732c204170706c65e280997320566973696f6e6172792c2044696573206174203536"
			}
		],
		"vout":[
			{
				"value":"626000.0000",
				"n":0,
				"scriptPubKey":{
					"hex":"040184710fa689ad5023690c80f3a49c8f13f8d45b8c857fbcbc8bc4a8e4d3eb4b10f4d4604fa08dce601aaf0f470216fe1b51850b4acf21b179c45070ac7b03a9 OP_CHECKSIG",
					"type":"pubkey",
					"reqSigs":1,
					"addresses":[
						"Ler4HNAEfwYhBmGXcFP2Po1NpRUEiK8km2"
					]
				}
			}
		]
	},
	historicalData: [
		
	],
	exchangeRateData:{
		jsonUrl:"https://api.coinmarketcap.com/v1/ticker/Litecoin/",
		exchangedCurrencyName:"usd",
		responseBodySelectorFunction:function(responseBody) {
			if (responseBody[0] && responseBody[0].price_usd) {
				return {"usd":responseBody[0].price_usd};
			}
			
			return null;
		}
	},
	blockRewardFunction:function(blockHeight) {
		var eras = [ new Decimal8(50) ];
		for (var i = 1; i < 34; i++) {
			var previous = eras[i - 1];
			eras.push(new Decimal8(previous).dividedBy(2));
		}

		var index = Math.floor(blockHeight / 840000);

		return eras[index];
	}
};
