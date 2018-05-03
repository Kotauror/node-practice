var person = {
  firstname: '',
  lastname: '',
  greet: function() {
    return this.firstname + " " + this.lastname;
  }
}

// object - we want to use this as a base, as a prototype for other objects.
// Instead of using function constructor, we will use this object literal.

var john = Object.create(person) // (person) - what to create that object from
// john - empty object

john.firstname = "John";
john.lastname = "hehe";
console.log(john.greet());

var jane = Object.create(person) // (person) - what to create that object from
jane.firstname = "Jane";
jane.lastname = "hehe";
console.log(jane.greet())
