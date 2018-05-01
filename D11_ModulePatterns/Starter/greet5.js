var greeting = "Hello cats";

function greet() {
  console.log(greeting)
}

module.exports = {
  greet: greet
} // we only expose the function, not greeting variable.
// we reveal in the object only the values/methods/properties we want others to use outside the modeule. 
