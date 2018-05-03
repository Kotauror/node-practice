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

##### NODE event emitter.

`Events` - a node built-in module // check out the node,js API documentation.

Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects (called "emitters") periodically emit named events that cause Function objects ("listeners") to be called.

All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows one or more functions to be attached to named events emitted by the object.

When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and will be discarded.

app.js

```javascript
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
```

Almost like the one above, but onlu uses the built in events module instead of a hand-made module as above.

Magic string - string that has a special meaning in the code. We use it in even emitter - we pass a string in both 'on' and 'emit' methods. Not the best solution - it makes it easy for a typo to cause a bug - it's also hard to find a bug. For ex. in case of variables, you get an error of unknown variable, in case of strings - you don't.

In order to avoid it, new module - config.js

```javascript
module.exports = {
  events: {
    GREET: 'greet',
    FILESAVED: 'filesaved',
    FILEOPENED: 'fileopened'
  }
}
```
`module.exports` equals an object.
This object will have different configuration values, on of them will be events. Events is another object (a property on the main object), which has key & value pairs.
Each even that i have in application wil get a propety on events.
greet, filesaved, fileopened - strings passed to the emitter.
GREET, FILESAVED, FILEOPENED - property names.

In app2.js:

```javascript
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
```

Everywhere where I used `'greet'`, now I'm using `eventConfig.GREET`, which has a value of `'greet'`. I get the same result, but avoid typos.

We can also change the string only in one place - config.

#### Object.create and prototypes - inheritance

Object.create - fast and clen way to set up inheritance - prototype chain.

```javascript
var person = {
  firstname: "",
  lastname: "",
  greet: function() {
    return this.firstname + " " + this.lastname;
  }
}
```

We want to use this code above as a base, as a prototype for other objects. Instead of using function constructor, we will use this object literal.

```javascript
var john = Object.create(person)
```
`(person)` - what to create that object from
`john` - empty object

```javascript
john.firstname = "John"
john.lastname = "hehe"
console.log(john.greet())
```

We overwrote `firstname` and `lastname`, also used `greet` method from `person` object.

#### Inheriting from Event Emitter
node `inherits` method.
First inherit, then add other properties.

```javascript
var EventEmitter = require('events');
var util = require('util');

function Greetr() { // function constructor
  this.greeting = "hello world";
}
util.inherits(Greetr, EventEmitter); // !!!!!!!!!!!!!!!!!!! // util module has inherits method.
// any object created from Greetr(instance) should have access to the methods
// and properties on the prototype property EventEmitter.

Greetr.prototype.greet = function() {
  console.log(this.greeting);
  this.emit('greet') // we can use emit because instance inherits from event emitter - see above `util.inherits(Greetr, EventEmitter);`
}

var greeter1 = new Greetr();

greeter1.on('greet', function() {
  console.log("someone did it")
})

greeter1.greet()
// console.log greeting - hello world
// invoked greeter.on('greet') - console.logged someone did it
```

Passing arguments

```javascript
var EventEmitter = require('events');
var util = require('util');

function Greetr() {
  this.greeting = "hello world";
}
util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) { // we pass arg here
  console.log(this.greeting + ": " + data); // use arg here
  this.emit('greet', data) // we pass it further to emit.
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) { // use it thanks to passing in emit
  console.log("someone did it" + data) // useit
})

greeter1.greet("Koteczka")
```
