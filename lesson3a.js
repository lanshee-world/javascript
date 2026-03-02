// Javascript For Loop
// Loops are used to iterate through something (Repeat something a number of times)
// structure of the for loop 
// 1. for keyword followed by parenthesis
// 2.initialization;set the condition;increment/decrement
// 3. Body of the for loop


for (let i = 0; i <= 10; i++){
    console.log("The new value of i is:", i)
}
for (let i = 0; i <= 10;i++){
    if(i == 6){
        console.log("this is number six:", i)
    }
    else{
    console.log("the new value of i is:", i)
        } 
    }

// create a for loop that is able to print out all the leap years from 2000 to 2026
for (let i = 2000; i <= 2026; i++){
    if(i % 400 == 0){
        console.log("This is a leap year:", i)
    }
    
}
// pg28 of java script notes
// print all odd numbers from 1 to 19
for(let i = 1; i <= 19; i += 2){
    console.log(i);
}

// countdown from ten to one
for(let i = 10; i >= 1; i--){
    console.log(i);
}

// find the largest number in the array
let arr = [10,20,4,45,99,1];
let largest = arr[0];
for(let i = 1; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i];
    }
}
console.log(largest);

// print the multiplication table of 5
for(let i = 1; i <= 10; i++){
    console.log("5 x" + i + "=" + (5 * i));
}
