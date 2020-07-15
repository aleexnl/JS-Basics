/*
███████╗░█████╗░██████╗░  ██╗░░░░░░█████╗░░█████╗░██████╗░
██╔════╝██╔══██╗██╔══██╗  ██║░░░░░██╔══██╗██╔══██╗██╔══██╗
█████╗░░██║░░██║██████╔╝  ██║░░░░░██║░░██║██║░░██║██████╔╝
██╔══╝░░██║░░██║██╔══██╗  ██║░░░░░██║░░██║██║░░██║██╔═══╝░
██║░░░░░╚█████╔╝██║░░██║  ███████╗╚█████╔╝╚█████╔╝██║░░░░░
╚═╝░░░░░░╚════╝░╚═╝░░╚═╝  ╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░
*/

// EXAMPLE
for (let i = 0; i <= 10; ++i) {
  console.log(`The value of i is ${i}`);
}
console.log("End of for loop.");

// This loop will go trough all array elements.
let fruits = ["apple", "banana", "wiki", "melon", "watermelon"];
for (let index = 0; index < fruits.length; index++) {
  const fruit = fruits[index]; // Variables inside loops do not exist when it finishes.
  console.log(`${fruit}, it is my top ${index + 1} favourite fruit`);
}
console.log("End of for loop.");
