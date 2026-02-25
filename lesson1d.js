// String Data Type
// A string is a series/sequence of characters that are enclose inside of quotation marks.
let name = "Fidel"
console.log("The name is: " ,name)
console.log(typeof(name))

// floating point:this a number with a decimal
let quantity = 35.5
console.log("The quantity of sugar bought is:", quantity)
console.log(typeof(quantity))

// Boolean: It returna true or false 
let isAdult = true
let isRegistered = false
console.log("Is James an adult?", isAdult)
console.log("Is James registered as a voter?", isRegistered)
console.log(typeof(isAdult))
console.log("=================")

// Undefined:This is a data type that has been declared but there is no value that has been assigned to it.
let county;
console.log("The county is:", county)
console.log("===============")

// null data type:It is a data type that contains null values 
let username = null
console.log("What is the username?", username)

// Research and come up with examples on Object and Array data types.Show how to access items of the object and of an array.

// Object data type:objects are collections of key-value pairs used to store data in a structured way
const person ={
    firstName: "Andrew",
    lastName: "Keya",
    age: 18
};
// accessing items;
// 1.Using dot notation
console.log(person.firstName)

// 2.Using bracket notation
console.log(person["lastName"])

// Arrays are ordered lists of values,typically used to store multiple items of simmilar data.
const fruits =["Apple", "Banana", "Cherry"];

// accessing items in an array:Items are accessed using bracket notation with their index position.
console.log(fruits[0])
console.log(fruits[1])
console.log(fruits[2])
