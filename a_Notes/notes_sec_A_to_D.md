## Notes from udemy node.js course - sec. 1 - 4.

### Shortcut - quick node server setup  

```javascript
var http = require('http');

http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
```

### V8 javascript engine

micro - a very small machine that speaks a language and gets instructions in that language (eg. IA-32, x86-64, ARM).
Every program we run on our computer is converted(compiled) into a machine language, understood by processor.

Machine language --> assembly language --> C/C++ (still pretty big control of the memory etc.)
Node is written in C++ because javascript V8 engine is written in C++.

ECMAScript - standard JS is based on.

V8 zwiększa wydajność przez kompilację JavaScript do kodu maszynowego przed wykonaniem go, a nie do kodu bajtowego i interpretowania go. Dalszy wzrost wydajności osiągnięto dzięki zastosowaniu technik optymalizacji, takich jak buforowanie inline.

ECMA - organisation that makes standards - tells how language shuld work.

A JS engine - a program that converts JS code into something the computer processor can understand.

Javascript code --> goes to V8 gengine written in C++ --> which transforms it to machine code that will run in the processor.

V8 allows to write your own C++ code we can make available to JS -- then if someone writes something particular in JS, it will make my C++ code run. -- it basically allows you to add new functionalities (extend) JS that was initially made for the browser.

in 8V - write any code (new feature) for JS - eg. how to communicate with DB - and make it available to my JS.

Node.js - a C++ feature added to JS through V8.

### Node core

Clinet --> in standard format request to Server
Server --> in standard format response to Client

WebServer - server connected to web, its usuall clients are internet browsers. The standard format is HTTP.

What JS need to manage a server?
- organise code in reusable pieces
- handle files
- deal with DB
- communicate over the internet
- accept req and send res in standard format
- deal with work that tkaes a long time.

### Writing node intro

We can run apps by typing node app.js in the command line.
We can run many files, not only one, but always need an entry point - one that will execute.

### Modules, exports and require

Modules - reusable block of code whose existence does not accidentaly impact other code.

CommonJS modules - an agreed upon standat for how code modules should be structured.

##### JS first-class functions and function expressions

first class functions - everything you can do with other types you can do with functions. Use functions like strings, numbers (i.e. pass them aroung, set variables to equal them, put them in arrays)

  function expression - block of code that results in a value. Are possible in JS because functions are first-class.

##### build a module

- module - independent code, but able to working with other code. Reusable. Keeps code structured and easy to manage as it grows.

- import module by using a node-specific require function,
that accepts one argument - a string - location of imported module.

eg. same level (location) - `require('./greet.js')`

Code in the module is not available in the file which requires it unless it's explicitly allowed. This separation protects the code so that a changes in module won't accidently affect the main code.

`Exports` - a spaciel place to put things that we want to make available to anything else that uses a module with the exports -- we decide what will be available outside the module for use.

In order to import what was export in another file, we can set it to a variable.

For example:

In the module :

```javascript
var hello = function() {
  console.log('jejejje')
};


var hello2 = function() {
  console.log('hohooho')
};

module.exports = hello2;
```

In main app:

```javascript
var greet = require('./greet.js');

greet()
```

### Object with method:

```javascript
var person = {
  firstname: "kot",
  lastname: "doe",
  greet: function() {
    console.log("hello " + this.firstname + " " + this.lastname)
  }
}

person.greet()  // hello kot doe
```

### Inheritance in JS

inheritance in JS implements prototypical inheritance.
Every object in JS has a property that points to another object - it's the objects prototype. It's a thing it inherits from. It's a different object which will then have access to different properties and methods.

Objects which inherit from prototypes, can use methods defined for these prototypes (not only in first-level inheritance, but in all levels) -- prototype chain.

Creating JS object in a way that allows us to manage what the prototype is:
* ES6 class
* Function constructors - function used to construct objects

### By reference vs by value

primitive - represents a single value - not object. eg. string, numbers. passing by value for primitives - naturally by JS.

when we pass object to a function - different thing happens! Passing by reference = no new copies of objects, changing the object passed!

by value:

```javascript
function change(argument) {
  argument = 2;
}

var a = 1;
change(a);
console.log(a);

// a still is 1, because it's primitive - by value. What happend to b didn't affect a - they have different places in memory.
```

by reference:

```javascript
function changeObj(d) {
  d.prop1 = function() {console.log("ji")};
  d.prop2 = {};
}

var c = {}

console.log(c) // {}
changeObj(c)
console.log(c.prop1) // [Function]
console.log(c) // { prop1: [Function], prop2: {} }
```
### Immediately Invoked Function Expressions - IIFEs

How they affect scope.

```javascript
(function () {

}) // expression holding a function

(function () {

}()) // immediately invoked expression holding a function
```
```JavaScript
(function () {

  var firstname = "John";
  console.log(firstname)

}()) // immediately invoked expression holding a function

var firstname = "kot"
console.log(firstname)  
// John Jane
```

```JavaScript
var firstname = "kot"

(function () {

  var firstname = "John";
  console.log(firstname)

}()) // immediately invoked expression holding a function

console.log(firstname)
// john Jane
```

First - does the IIFE
Later - console.log - idzie po kolei i tak.

We can pass arguments:

```javascript
(function (surname) {

  var firstname = "John";
  console.log(firstname)
  console.log(surname)

}("doe"))
```

### Module expports and require

Require - a JS function in node.
Require function gets a path as an arguments and returns what comes back from a require function.

Modules have access to a require function.

Summary:

We have a module, we wrapp the exported code in a function expression.
This func expect 5 parameters - exports, require, module, filename and dirname.

```javascript
(function (exports, require, module, __filename, __dirname) {
  var greet = function() {
    console.log("Hello!");
  }

  module.exports = greet;
});
  ```

Node invokes the function:

```javascript
fn(module.exports, require, module, filename, dirname)
```

require returns module.exports.
Whatever i do to module.exports inside the module is going to impact module.exports outside the function.

Require - a function you pass a path to

Module.exports - what require returns

It works because code is actually wrapped in a function that is given these things as function parameters.

### JSON

Javascript object notation - standard for structuring data.

- no functions, just pure data
- literal objects, eg.:

```plain
{
  "name": "kota",
  "surname": "kotowa",
  "address": {
    "street": "kocia",
    "number": 10
  }
}
```

### More on require - requiring several files and non-js files

If there is no file with the name passed in the require, it will look for the folder with the same name and index file - will run the index file.

File structure:

app:

```JavaScript
var greet = require("./greet")
```

greet/index.js:

```JavaScript
var english = require('./english');
var spanish = require('./spanish')

module.exports = {
  english: english, // name + value(name of variable)
  spanish: spanish
} // object with two methods on it.
```

greet/english.js:

```javascript
var greet = function() {
  console.log("hello")
};

module.exports = greet;
```

greet/spanish.js:

```javascript
var greet = function() {
  console.log("hola")
};

module.exports = greet;
```

Module.exports from index.js returns an object with two methods on it.
In app.js we assigned this object to the variable - greet.
Now we can call method available to the object like in app.js like this:

```javascript
greet.english()
greet.spanish()
```

### Processing .json file

I've added a JSON file to greet/greetings.json:

```JavaScript
{
  "en": "Hello",
  "es": "Hola"
}
```

Then I required it in spanish.js in english.js:

```javascript
var greetings = require("./greetings.json")
```

`greetings` is now an object made of JSON. We can now call `greetings.en` and get a string `Hello`.

### Module patterns

Structuring modules using patterns.

1. Overwriting module.exports empty objects

In module:
```javascript
module.exports = function() {
  console.log("hello")
}

// overwrite empty module.exports object - now it is a function.
```
In app.js:

```javascript
var greet1 = require('./greet1')
greet1() // is a function as module.exports has a function
```
2. Adding a method to the module.exports object

In module:
```javascript
module.exports.greet = function() {
  console.log("hello world")
} // we've added a method to the module.exports object.
```
In app.js:
```javascript
var greet2 = require('./greet2')
greet2.greet() // call a greet method of greet2 object.
//or
var greet2 = require('./greet2').greet
greet2() // we narrowed the require to the greet method, so now greet2 is a method
```

3. Function constructor - single object

in module:
```javascript
function Greeter() {
  this.greeting = "Hello world"
  this.greet = function() {
    console.log(this.greeting)
  }
}

module.exports = new Greeter();
```
in app.js:

```javascript
var greet3 = require('./greet3')
greet3.greet()
```

We exported an instance of Greeter. This instance has access not only to its attributes,
but also to the methods prototyped for Greeter.

Even if we would do `var greet3 = require('./greet3')` many times, it will always be the same object - requiring it many times and changing the nae of variable won't help.

It's because require caches - stores - the result of the require function for any filename. Whatever I have in module.exports, I will have cached and that cache will be returned instead.

4. Function constructor - many objects
In case we don't want to have always only one object, as above, but many.

In module:

```javascript
function Greeter() {
  this.greeting = "Hello world"
  this.greet = function() {
    console.log(this.greeting)
  }
}

Greeter.prototype.funny = function() {
  console.log("hehhe")
}

module.exports = Greetr;
```

Instead of exporting an instance, we export the whole constructor.
Then we can create an instance(/s) in app. Also use on them the prototyped methods.

In app.js:

```JavaScript
var Greet4 = require('./greet4')
var greeter = new Greet4();
greeter.greet();
greeter.funny();
```

5. Revealing module pattern - exports an object with some properties

Exposing only the properties and methods you want via an returned object.

In module:

```javascript
var greeting = "Hello cats";

function greet() {
  console.log(greeting)
}

module.exports = {
  greet: greet
} // we only expose the function, not greeting variable.
// we reveal in the object only the values/methods/properties we want others to use outside the modeule.
```

In app.js:

```javascript
var greet5 = require('./greet5')
greet5.greet()
```

### Exports vs module exports.

`Exports` is a shorthand to `module.exports` but is problematic somethimes (see D12 video). It;s safer to use module.exports

### Requiring core (native) modules.

Require serves also another purpose than just help me grab my custom modules. 
