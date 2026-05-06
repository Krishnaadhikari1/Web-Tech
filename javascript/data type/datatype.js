//Primitive Data Types

// Number
let num1 = 10;
let num2 = 3.14;

// String
let name = "Krishna";

// Boolean
let isActive = true;

// Undefined
let x;

// Null
let y = null;

// BigInt
let bigNumber = 1234567897890;

// Symbol
let uniqueId = Symbol("id");


// Non-Primitive (Reference) Data Types

// Object
let person = {
    name: "Krishna",
    age: 20
};
// Array
let numbers = [1, 2, 3, 4, 5];
// Function
function greet() {
    return "Hello, Welcome!";
}
//Output Section

console.log("Number:", num1, num2);
console.log("String:", name);
console.log("Boolean:", isActive);
console.log("Undefined:", x);
console.log("Null:", y);
console.log("BigInt:", bigNumber);
console.log("Symbol:", uniqueId);
console.log("Object:", person);
console.log("Array:", numbers);
console.log("Function:", greet());

//Type Checking using typeof

console.log("\n--- Type Checking ---");

console.log("num1:", typeof num1);
console.log("name:", typeof name);
console.log("isActive:", typeof isActive);
console.log("x:", typeof x);
console.log("y:", typeof y);        // special case (object)
console.log("bigNumber:", typeof bigNumber);
console.log("uniqueId:", typeof uniqueId);
console.log("person:", typeof person);
console.log("numbers:", typeof numbers);
console.log("greet:", typeof greet);