function Greeter() {
  this.greeting = "Hello world"
  this.greet = function() {
    console.log(this.greeting)
  }
}

Greeter.prototype.funny = function() {
  console.log("hehhe")
}

module.exports = Greeter;
