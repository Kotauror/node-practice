var Emitter = require('./emitter.js')

var emtr = new Emitter();

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
