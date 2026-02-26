// Object data type
// an object in javascript is a data type that stores data in form of key-value pairs.

let person = {
    name: "Keya",
    age: 18,
    isRegistered: true
};
console.log("The details of the person is:", person)

// first method is by use of the square brackets(bracket notation)
console.log(person["age"])

// second method is by use of a dot(dot notation)
console.log(person.name)

// check the data type
console.log(typeof(person))

// Array data type:This refers to a collection of items that are on indexes
let fruits = ["Mango", "Pineapple", "Apple", "Banana", "Melon", "lemon", "Grapes"]

// to access the items of an array we use the index
console.log(fruits[3])

// you can slice items of an array
console.log(fruits.slice(2, 6))

