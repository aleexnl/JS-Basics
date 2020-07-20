/*
░██████╗██████╗░██████╗░███████╗░█████╗░██████╗░  ░█████╗░██████╗░███████╗██████╗░░█████╗░████████╗░█████╗░██████╗░
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗  ██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗
╚█████╗░██████╔╝██████╔╝█████╗░░███████║██║░░██║  ██║░░██║██████╔╝█████╗░░██████╔╝███████║░░░██║░░░██║░░██║██████╔╝
░╚═══██╗██╔═══╝░██╔══██╗██╔══╝░░██╔══██║██║░░██║  ██║░░██║██╔═══╝░██╔══╝░░██╔══██╗██╔══██║░░░██║░░░██║░░██║██╔══██╗
██████╔╝██║░░░░░██║░░██║███████╗██║░░██║██████╔╝  ╚█████╔╝██║░░░░░███████╗██║░░██║██║░░██║░░░██║░░░╚█████╔╝██║░░██║
╚═════╝░╚═╝░░░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░  ░╚════╝░╚═╝░░░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝
Expansion operator.
Syntax: ...
*/

// Send elements in an Array inside a function.
const sumNumbers = (a, b, c) => {
  console.log(`Sum of 3 array elements: ${a + b + c}`);
};

let numbers = [33, 44, 66, 88, 88];

sumNumbers(...numbers); // Only sends the first 3 elements

// Add an array to an array
let users = ["Javier", "David", "Rosa", "Juan", "Mercedes"];
let newUsers = ["Marta", "Jaime", "Laura"];

users.push(...newUsers); // add newUsers array elements to users array.
console.log(`Users: ${users.join(", ")}`);

// Copy arrays.
let copyNumbers = [...numbers];

console.log(`Numbers array copy: ${copyNumbers}`);

// Concatenate arrays.
copyNumbers = [...numbers, ...copyNumbers];
console.log(`Concatenated arrays: ${copyNumbers}`);

// Send an undefined number of arguments to a function (rest parameters).
const showNumbers = (...args) => {
  console.log(`Arguments: ${args}`);
};

showNumbers(1, 2, 3, 4, 5, 6, 7, 8, "fruit");

// Math library.
console.log(`Max number in array: ${Math.max(...numbers)}`);
console.log(`Min number in array: ${Math.min(...numbers)}`);

//Delete duplicated elements inside an array.
console.log([...new Set(numbers)]); // `Set` object does not allow duplicated elements.
