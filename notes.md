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
