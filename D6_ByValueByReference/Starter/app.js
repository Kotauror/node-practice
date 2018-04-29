function change(argument) {
  argument = 2;
}

var a = 1;
change(a);
console.log(a);

// a still is 1, because it's primitive - by value. What happend to b didn't affect a - they have different places in memory.


function changeObj(d) {
  d.prop1 = function() {console.log("ji")};
  d.prop2 = {};
}

var c = {}

console.log(c)
changeObj(c)
console.log(c.prop1)
console.log(c)
