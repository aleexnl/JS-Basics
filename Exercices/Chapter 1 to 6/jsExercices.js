// EXERCICE 1
let name = prompt("Input your name:");
let lastname = prompt("Input your lastname:");
let years = prompt("Input your age:");

console.log(
  `Hello ${name} ${lastname}, you are ${years} years old. The next year you will be ${
    parseInt(years) + 1 // parseInt allows you to get a integer from a string.
  } years old.`
);
