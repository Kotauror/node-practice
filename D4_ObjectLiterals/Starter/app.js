// Your Javascript Code Goes Here

// {
//   name: "kota",
//   age: 27,
//   hobbys: {
//     best: "code",
//     other: "drawing"
//   }
// }

// hobbys - another object

var person = {
  firstname: "kot",
  lastname: "doe",
  greet: function() {
    console.log("hello " + this.firstname + " " + this.lastname)
  }
}

person.greet()

console.log(person['firstname'])
