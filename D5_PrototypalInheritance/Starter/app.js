function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

let john = new Person("john", "doe")

Person.prototype.greet = function() {
  console.log("hello" + this.firstname)
}

console.log(john.firstname)

john.greet()

console.log(john.__proto__)
