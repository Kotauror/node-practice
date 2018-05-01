exports = function() {
	console.log('Hello');
}

console.log(exports); // now this line and the following line point to the same memory location.  //function declared above
console.log(module.exports); // empty object
