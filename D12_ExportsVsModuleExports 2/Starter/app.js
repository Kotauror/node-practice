var greet = require('./greet');
// var greet2 = require('./greet2');
greet() // TypeError: greet is not a function
// its because we exported only an empty object module.exports.

"***** greet2 below"

var greet2 = require('./greet2');
greet2.greet();
