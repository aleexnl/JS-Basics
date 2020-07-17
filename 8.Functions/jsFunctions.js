/* 
███████╗██╗░░░██╗███╗░░██╗░█████╗░████████╗██╗░█████╗░███╗░░██╗░██████╗
██╔════╝██║░░░██║████╗░██║██╔══██╗╚══██╔══╝██║██╔══██╗████╗░██║██╔════╝
█████╗░░██║░░░██║██╔██╗██║██║░░╚═╝░░░██║░░░██║██║░░██║██╔██╗██║╚█████╗░
██╔══╝░░██║░░░██║██║╚████║██║░░██╗░░░██║░░░██║██║░░██║██║╚████║░╚═══██╗
██║░░░░░╚██████╔╝██║░╚███║╚█████╔╝░░░██║░░░██║╚█████╔╝██║░╚███║██████╔╝
╚═╝░░░░░░╚═════╝░╚═╝░░╚══╝░╚════╝░░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═════╝░
*/

// This functions won't return anything, they only execute a piece of code.
function greet(name, age) {
  console.log(`Hello ${name}. You are ${age} years old.`);
}
const newGreet = (name, age) => {
  console.log(`Hello ${name}. You are ${age} years old.`);
};

let name = prompt("Write your name.");
let age = parseInt(prompt("Write your age."));
greet(name, age); // call the function passing needed arguments
newGreet(name, age); // ES6 Function statement

/* This functions return a result; they execute a piece of code 
and return a new result, allowing us to store that result or 
operate with it. */
function sum(num1, num2) {
  return num1 + num2;
}
const newSum = (num1, num2) => num1 + num2; // we can make one line functions with ES6 statement.
// If we used {}, we should put return statement.

result = sum(5, 5); // We can store the result in a variable for further use.
console.log(result);
result = newSum(10, 5);
console.log(result);
