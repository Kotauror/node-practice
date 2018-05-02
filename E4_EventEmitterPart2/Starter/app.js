// ------------- relying on strings - for using config.js - see app2.js


var Emitter = require('events') // node module, gives back the constructor

var emtr = new Emitter(); // create a new emitter.

// create event greet with two listeners

emtr.on('greet', function() {
  console.log("somwhere, someone said hello.")
})

emtr.on('greet', function() {
  console.log("a greeting ocurred")
})

console.log("hello")

// emit the greet event

emtr.emit('greet')

// ------------- not relying on strings

var eventConfig = require('./config').events // returns an object.
