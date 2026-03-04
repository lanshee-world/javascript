const greet = (name) => {
    console.log("Hello " + name + "How have you been? I trust that you are good.")
}
 greet("Fidel.");

// Example 2
console.log("===================")

// Below is a function to find the area of a circle
const CircleArea = (pi, radius) => {
    let area = pi * radius * radius
    console.log("The area of the circle is: " + area + "cm\u00B2")
}
CircleArea(3.142, 7);
CircleArea(3.142, 28);

console.log("===================")
// come up with ur own example of an arrow function that utilizes 3 parameters
// 1.
const minus = (a,b,c) => a - b - c
console.log(minus(20,8,6));
console.log(minus(30,10,4));
// 2.
const half = 0.5
const triarea = (half,base,height) => {
    let area = half * base * height
    console.log("The area of the triangle is: ", area)
}
triarea(half,2,5);
triarea(half,30,16);