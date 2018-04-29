// function statement
function greet() {
  console.log("hi");
}
greet()

// functions are first-class [we can pass them like variables]

function logGreeting(fn) {
  fn();
}
logGreeting(greet)

// here we have a function logGreeting which takes a function as an argument and runs it.
// We called logGreeting with greet function as an argument.

// function expression

var greetMe = function() {
  console.log("Hi kota")
}
greetMe()

// the above is first class - we can pass it around
logGreeting(greetMe)

// use a function expression on a fly - created a function in a place of argument -
// why bother setting it to a variable, if im using it only once? 

logGreeting(function() {
  console.log("hi koteczko")
})
