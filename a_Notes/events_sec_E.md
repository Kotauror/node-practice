## Events and event emitter

### Events

something that has happend in our app that we can respond to. Events and listening/responding - in many areas of software architecture.
In node - two different kinds of events:
  * system events - C++ side of the node.js sobe, thank to libuv library - deals with events coming from a computer system like I've finished reading a file, file is open, I've received data from the internet. // JS doesn't have it, C++ events allow it //
  * custom events - javascript core - JS library of events that deals with events that I can create for myself. I said hey, sth happend and have a code that responds to sth happening -- Event Emitter inside the JS core.
Often when even occurs in libuv it generate a custom JS event to make it easier to decide what should happen.
JS are no real events - concept of event is unknown to JS. But we can create our event library with the technique of node event emitter.

### Node event emitter

Event listenet - code that responds to a event. event happens and we;re listening for an event. (a function) When event happens, code is run. A function which will be run when event happens.  We can have many listeners listening for the same event. In case of event, all will be invoked (one at a time).

##### JS EXAMPLE - understanding types and listeners. 


```javascript
// emitter module

function Emitter() {
  this.events = {};
}

// how we listen - how we add pairs of type & listener to an emiter.

Emitter.prototype.on = function(type, listener) {
  this.events[type] = this.events[type] || [] // if it exists then fine, otherwise make an array
  console.log(this.events[type])
  this.events[type].push(listener)
}

// how make things happen

Emitter.prototype.emit = function(type) {
  if (this.events[type]) { // if I have this property on object
    this.events[type].forEach(function(listener) { // loop - its an array
      listener() // execute the method.
    })
  }
}

```

`.on` function and its arguments - on action received (type eg. onClick, onFile), do an action... (listener eg. PrintFile).

As a result of on function, I'll be having:

```plain
function Emitter() {
  this.events = {
    property1: [],
    property2: [],
    onClick: [function() {}, function() {}]
  }
}
```


app.js

```javascript
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
```

##### NODE EXAMPLE of an event emitter.
