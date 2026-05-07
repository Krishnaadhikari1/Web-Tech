// ===============================
// STATEMENTS & EXPRESSIONS IN JS
// ===============================

// 👉 Expression examples (produce value)
let a = 5 + 3;            // expression (5 + 3 = 8)
let b = a * 2;            // expression (8 * 2 = 16)
let c = "Hello" + " JS";  // expression ("Hello JS")
let isTrue = 10 > 5;      // expression (true)

// 👉 Statement examples (perform action)
let x = 10;               // declaration statement

if (x > 5) {              // if statement
    console.log("x is greater than 5");
}

for (let i = 0; i < 3; i++) {   // loop statement
    console.log("Loop:", i);
}

// 👉 Expression inside statement
let result = (5 + 3) * 2;   // (5+3) is expression, whole line is statement

// 👉 Function (statement + expression)
function add(num1, num2) {   // function declaration (statement)
    return num1 + num2;      // return uses expression
}

let sum = add(4, 6);         // calling function (expression + statement)

// 👉 Arrow function (expression)
const multiply = (x, y) => x * y;

console.log("Multiply:", multiply(3, 4));

// 👉 Assignment expression
let d;
d = 20;   // assignment expression used as statement

// 👉 Final outputs
console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("isTrue:", isTrue);
console.log("result:", result);
console.log("sum:", sum);