var Emitter = require('events') // node module, gives back the constructor
var eventConfig = require('./config').events // returns an object.

var emtr = new Emitter(); // create a new emitter.

emtr.on(eventConfig.GREET, function() {
  console.log("somwhere, someone said hello.")
})

emtr.on(eventConfig.GREET, function() {
  console.log("a greeting ocurred")
})

console.log("hello")

emtr.emit(eventConfig.GREET)
