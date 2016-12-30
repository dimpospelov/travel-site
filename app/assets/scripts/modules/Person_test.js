// Constructor function. Blueprint
// function Person(fullName) {
// 	this.name = fullName;
// 	this.greet = function() { // Method
// 		console.log("Hey " + this.name);
// 	}
// }


// ES6 (ES2015) - new standard, converted to old format via babel
class Person {
	constructor(fullName) {
		this.name = fullName;
	}

	greet() {
		console.log("Hey there " + this.name);
	}
}

// target 'exports' property parent and make it equal a constructor function
//module.exports = Person; 
//ES6 way:
export default Person;

// 'exports' properties can be accesses. Object with Methods (functions) and Properties (values) 
//exports.property = "Blah"; 

