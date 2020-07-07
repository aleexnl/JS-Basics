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

// We can work with the values inside an array.
console.log(`${numbers[0]} + ${numbers[3]} = ` + (numbers[0] + numbers[3])); // Math operation.
console.log(`${fruits[0]} + ${fruits[3]} = ` + (fruits[0] + fruits[3])); // String concatenation.

/*
█▀█ █▀█ █▀█ █▀█ █ █▀▀ █▀█ ▀█▀ █ █▀▀ █▀
█▀▀ █▀▄ █▄█ █▀▀ █ ██▄ █▀▄ ░█░ █ ██▄ ▄█
*/

// length -> Returns the number of positions tht the array has.
console.log("Fruit array length: " + fruits.length);

/*
█▀▄▀█ █▀▀ ▀█▀ █░█ █▀█ █▀▄ █▀
█░▀░█ ██▄ ░█░ █▀█ █▄█ █▄▀ ▄█
*/

// isArray(value to evaluate) -> Returns the number of positions tht the array has.
let number = 4;
console.log("¿Is an Array?: " + Array.isArray(fruits)); // True
console.log("¿Is an Array?: " + Array.isArray(number)); // False

// shift() - Deletes and returns the first element of the array.
// pop() - Deletes and returns the last element of the array.
console.log(`Deleted element: ${fruits.pop()}`);
console.log(`New array: ${fruits}`);
let deletedElement = fruits.shift(); // We can store the deleted elements in a variable.
console.log(`Deleted element: ${deletedElement}`);
console.log(`New array: ${fruits}`);

// push(value1, *value2, ...) -> Adds new values at the end of the array and returns the new length.
// unshift(value1, *value2, ...) -> Adds new values at the start of the array and returns the new length.
fruits = ["Apple", "Banana", "Melon", "Watermelon"]; // Reset array values.
console.log(`New array length: ${fruits.push("Kiwi", "Peach")}`);
console.log(`New array: ${fruits}`);
let addedElement = fruits.unshift("Pear"); // We can store the new length of the array.
console.log(`New array length: ${addedElement}`);
console.log(`New array: ${fruits}`);

// indexOf() -> Returns the first index of the value that equals the specified one, or -1 if does not find no one.
fruits = ["Apple", "Banana", "Melon", "Watermelon", "Melon"];
console.log(`Wheres the first index of Melon? ${fruits.indexOf("Melon")}`);

// lastIndexOf() -> Returns the last index of the value that equals the specified one, or -1 if does not find no one.
fruits = ["Apple", "Banana", "Melon", "Watermelon", "Melon"];
console.log(`Wheres the last index of Melon? ${fruits.lastIndexOf("Melon")}`);

// reverse() -> Reverses the order of the array elements.
console.log(fruits.reverse());

// join(*'separator') -> Returns a string with the specified separator (Default: ,).
console.log(`Fruits to buy: ${fruits.join("-")}`);
let fruitList = fruits.join("-");
console.log(fruitList); // We can store the string in a variable

// splice(start, num elements, *items) -> Deletes the actual content of an array or adds the specified values.

//console.log(numbers);
//numbers.splice(3) - Elimina desde la posicion a hasta el final
//numbers.splice(2,2) - Elimina desde la posicion a el número valores que le indiquemos
//numbers.splice(2,2,10,23,54) - Si b es un valor distinto de 0 elimina el número de valores que indiquemos en b y añade los valores de items a partir de la posicion a
//numbers.splice(4,0,10,23,54) - Si b vale 0 añade los elementos a partir de la posicion a y no elimina ninguno
//console.log(numbers);

/* 
    .slice(a,b) - Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.
*/

//let newNumbers = numbers.slice();
//console.log(numbers);
//console.log(newNumbers);

//let newNumbers = numbers.slice(2);
//console.log(numbers);
//console.log(newNumbers);

//let newNumbers = numbers.slice(2,4);
//console.log(numbers);
//console.log(newNumbers);
