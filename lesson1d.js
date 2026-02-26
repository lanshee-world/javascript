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

// object inside an array
const students = [
    {name: "Brian", age: 19},
    {name:"Fred", age: 18}
]
// accessing the items
console.log(students[0].age)

// array inside an object
const company = {
    name: "Tech solutions",
    employees: ["Alice","Alex","George"]
}
// accessing the items
console.log(company.employees[2])

// what is the difference between a dictionary in python,an object in javascript and a json data when dealing with APIs.



// mapping an object to a python dictionary
const jsobject = {
    name : "John",
    age : 26,
    city : "Tunis"
};
const jsonString =JSON.stringify(jsobject);
