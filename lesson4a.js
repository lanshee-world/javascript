// Functions with parameters.
// Parameters are values that get passed as arguements when we invoke a function.
// they help us create functions that can be reusable throughout a program.

function greeting(name){
    console.log("Hello",name,"How have you been?")
}
greeting("Fidel,")
greeting("John James")

console.log("=====================")

// Below is a function to calculate the sum of two numbers
function addition(number1,number2){
    sum = number1 + number2
    console.log("the sum of the numbers is :", sum)
}
addition(45,60)
// calculate the area of a triangle whose base is 20 and height is 12cm
function trianglearea(num1,num2){
    area = num1 * num2 * 0.5
    console.log("area is:", area)
}
trianglearea(20,12)

// find the simple interest given the principle as 50000,rate as 5% and time as 8 yrs.
function simpleint(principle,rate,time){
    si = (principle * rate * time)/100
    console.log("The simple interest is:", si)
}
simpleint(50000,5,8)