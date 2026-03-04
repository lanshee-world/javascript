// Arrow Functions
// This is a function that was introduced in the ECMA Script 6 and they give us the latest/modern way of defining functions in compact manner.
// At times the arrow function can be said to be anonymous functions.This is because they use the names of the variables they are contained in.

const sayHello = () => {
    console.log("This is an Arrow Function. ")
}


sayHello();

console.log("=================")
// create an arrow function that is able to find the product of three numbers. 
// using parameters
const product = (a,b,c) => a * b * c 
console.log (product(5,3,2));

// or without parameters
const prod = () => {
    let num1 = 5
    let num2 = 3
    let num3 = 2
    answer = num1 * num2 * num3
    console.log(answer)
}
prod();
