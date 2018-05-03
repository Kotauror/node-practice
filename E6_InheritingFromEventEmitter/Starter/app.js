var EventEmitter = require('events');
var util = require('util');

function Greetr() { // function constructor
  this.greeting = "hello world";
}
util.inherits(Greetr, EventEmitter); // util module has inherits method.
// any object created from Greetr(instance) should have access to the methods
// and properties on the prototype prot=pety EventEmitter.

Greetr.prototype.greet = function(data) {
  console.log(this.greeting + ": " + data);
  this.emit('greet', data)
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
  console.log("someone did it" + data)
})

greeter1.greet("Koteczka")
// console.log greeting - hello world
// invoked greeter.on('greet') - console.logged someone did it
