var obj = {
  name: "John",
  surname: "hehhee",
  greet: function() {
    console.log(`Hello ${this.name} ${this.surname}`)
  }
}

obj.greet();
obj.greet.call({name: "Jane"}) // invokes a function like ()
// the difference is - we can pass an argument and overwrite what this points to.
// now Jane becomes this
// output:
// Hello John hehhee
// Hello Jane undefined <---- because Jane doesn't have a surname.
obj.greet.apply({name: "Jane"})  // pass array of parameters
