/*
████████╗███████╗██████╗░███╗░░██╗░█████╗░██████╗░██╗░░░██╗
╚══██╔══╝██╔════╝██╔══██╗████╗░██║██╔══██╗██╔══██╗╚██╗░██╔╝
░░░██║░░░█████╗░░██████╔╝██╔██╗██║███████║██████╔╝░╚████╔╝░
░░░██║░░░██╔══╝░░██╔══██╗██║╚████║██╔══██║██╔══██╗░░╚██╔╝░░
░░░██║░░░███████╗██║░░██║██║░╚███║██║░░██║██║░░██║░░░██║░░░
░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░

░█████╗░██████╗░███████╗██████╗░░█████╗░████████╗░█████╗░██████╗░
██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗
██║░░██║██████╔╝█████╗░░██████╔╝███████║░░░██║░░░██║░░██║██████╔╝
██║░░██║██╔═══╝░██╔══╝░░██╔══██╗██╔══██║░░░██║░░░██║░░██║██╔══██╗
╚█████╔╝██║░░░░░███████╗██║░░██║██║░░██║░░░██║░░░╚█████╔╝██║░░██║
░╚════╝░╚═╝░░░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝
A ternary operator evaluates a condition and executes a block of code based on the condition.
*/

// Ternary operator
let number = 0;
/* This will give teh variable a value depending on 
the result of the nested ternary operator. */
let result = number >= 0 ? "positive" : "negative";
console.log(`The number is ${result}.`);

/* Nested ternary operator
This will give teh variable a value depending on 
the result of the nested ternary operator. */
result = number >= 0 ? (number == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);
