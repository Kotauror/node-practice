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
