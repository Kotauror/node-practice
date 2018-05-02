var util = require('util'); // core module utilities // util - because of node api tells us :P
// we dont need ./
var name = "Kota"
var greeting = util.format('Hello, %s', name); // utilities format
util.log(greeting); // normal console.log but with a timestamp. 
