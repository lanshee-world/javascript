// Javascript Functions
// A function is a block of code that performs a certain action/task
// The simple structure of a function is given below:
// function keyword ,name of the function, parenthesis,the body of the function inside of curly braces.
function sayHello(){
    console.log("Hello there,Hope you are having a good day?")
}
// call/invoke the function by use of the name of the function.
sayHello()

function sayGoodbye(){
    console.log("Goodbye,have a nice day and a good weekend ahead...")
}
sayGoodbye()

// research on arrow function,functions with parameters and anonymous functions in javascript.

// 1. arrow functions- they provide a more concise syntax for writing functions.They are particurlarly useful for shorter functions and for functions that  do not need their own this,arguments,super,or  new.target bindings
// syntax example:const add =(a, b) => a + b;

// 2. Functions with parameters - are functions that accept input values (arguments) when they are called.Parameters allow functions to perform operations on dynamic data
// syntax example:function greet(name){return 'Hello, '+ name;}

// 3. Anonymous functions - are functions without a name.They are often used as arguments to other functions(callbacks) or immediately invoked function expressions(IIFEs).Arrow functions are a form of anonymous function.
// syntax example(assigned to a variable):const myFunc = function() {
// console.log('I am anonymous');};