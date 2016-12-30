/* this syntax is only available in node. 
we've added a webpack to make it work. 
we can also import npm packages here
*/
var $ = require('jquery');
//var Person = require('./modules/Person');
//ES6 way of importing:
import Person from './modules/Person';

class Adult extends Person {
	payTaxes() {
		console.log(this.name + ' owns nothing');
	}
}

var john = new Person("John"); // Will create a new object
john.greet();

var jane = new Adult("Jane Dorian");
jane.greet();
jane.payTaxes();