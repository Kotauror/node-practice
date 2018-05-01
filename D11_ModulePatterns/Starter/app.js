// pattern 1 for greet1

var greet1 = require('./greet1')
greet1() // is a function as module.exports has a function

// pattern 2 for greet2

var greet2 = require('./greet2')
greet2.greet() // call a greet method of greet2 object.
//or
var greet2 = require('./greet2').greet
greet2() // we narrowed the require to the greet method, so now greet2 is a method

// pattern 3 for greet3

var greet3 = require('./greet3')
greet3.greet()
greet3.funny

console.log("***")

// pattern 4 for greet4

var greet4 = require('./greet4')
var greeter = new greet4();
greeter.greet();
greeter.funny();

// pattern 5 for greet5
console.log("***")

var greet5 = require('./greet5')
greet5.greet()
