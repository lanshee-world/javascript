// While loop
// Below is a simple syntax of the while loop
// 1.Initialization of a variable
// 2.while keyword
// 3.condition to be checked
// 4.body of the while loop
// 5.increment/decrement
let i = 0;
while(i <= 10){
    console.log("the new value of i is:", i)
    i++
}
// The map() method is used to iterate over an array and create a  new array by applying a function to each element.
// come up with a js example of a map loop
const numbers = [1,2,3,4,5];
// use map to create a new array containing the square of each number
const squares = numbers.map((number) => number * number);
console.log(squares);

// different example of map loop
const users = [{id: 1,name:"Andrew", email: "andrew@gmail.com"},
    {id: 2, name: "Bob", email: "bob@gmail.com"},
    {id: 3, name: "Charlie", email: "charlie@gmail.com"}
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames); // Output:["Andrew","Bob","Charlie"]

// check tasks on pg 30 of js book 
// print all odd numbers from 1 to 19
let n = 1;
while(n <= 19){
    console.log(n);
    n += 2
}

// countdown from 10 to 1
let count = 10;
while(count >= 1){
    console.log(count);
    count--;
}