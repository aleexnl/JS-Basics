/* 
░█████╗░██████╗░██████╗░░█████╗░██╗░░░██╗░██████╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗╚██╗░██╔╝██╔════╝
███████║██████╔╝██████╔╝███████║░╚████╔╝░╚█████╗░
██╔══██║██╔══██╗██╔══██╗██╔══██║░░╚██╔╝░░░╚═══██╗
██║░░██║██║░░██║██║░░██║██║░░██║░░░██║░░░██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═════╝░
An array is an object that can store multiple elements.
 */

let fruits = new Array("Apple", "Banana", "Melon", "Watermelon");
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(fruits); // Output: Array 4

console.log(`I like ${fruits[0]}.`); // Output: I like Apple.

/* We can work with the values inside of the array to do math operations,
string concatenations, etc. That's why is important that they have the 
same data types in the array. */
console.log(`${numbers[0]} + ${numbers[3]} = ` + (numbers[0] + numbers[3])); // Math operation.
console.log(`${fruits[0]} + ${fruits[3]} = ` + (fruits[0] + fruits[3])); // String concatenation.
