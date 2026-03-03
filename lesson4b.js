// anonymous functions in Javascript.
// These are functions that exist without a name.
// Below is an example of such functions;
// The below function shall take the name of the variable they are contained in:
const greet = function(){
    console.log("Hello there,hope your Monday is fine...")
}
greet();

// Below is another anonymous function
(function(){
    console.log("Welcome to the world of programming...")
})();






// read on arrow functions with and without parameters and research on modules in javascript.
// arrow functions without parameters
const greeting = () => console.log("Hello!");
greeting()

// with a single parameter
// parenthesis are optional
const square = x => x * x;
// or 
const double = (x) => x * 2;

// with multiple parameters
const add = (a, b) => a + b;

// JAVASCRIPT MODULES

// Export:used to make variables,functions or classes available to other files 
// Named exports - for multiple values (export const myVar = 10;).
// Default export - for one primary value per module(export default myFunction;)

// Import:use to bring functionality from other modules.
// example - Import {myVar} from './module.js';

// usage in browser: to use native ES modules in a browser, you must include the type="module" attribute in your <script> tag.
// HTML
// <script type="module" src="main.js"></script>

export {square, double}; 