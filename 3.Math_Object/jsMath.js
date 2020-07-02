/*
███╗░░░███╗░█████╗░████████╗██╗░░██╗  ░█████╗░██████╗░░░░░░██╗███████╗░█████╗░████████╗
████╗░████║██╔══██╗╚══██╔══╝██║░░██║  ██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝
██╔████╔██║███████║░░░██║░░░███████║  ██║░░██║██████╦╝░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░
██║╚██╔╝██║██╔══██║░░░██║░░░██╔══██║  ██║░░██║██╔══██╗██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░
██║░╚═╝░██║██║░░██║░░░██║░░░██║░░██║  ╚█████╔╝██████╦╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░
╚═╝░░░░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝  ░╚════╝░╚═════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░
Static object


█▀█ █▀█ █▀█ █▀█ █ █▀▀ █▀█ ▀█▀ █ █▀▀ █▀
█▀▀ █▀▄ █▄█ █▀▀ █ ██▄ █▀▄ ░█░ █ ██▄ ▄█

-> Math.E - Math.Pi


█▀▄▀█ █▀▀ ▀█▀ █░█ █▀█ █▀▄ █▀
█░▀░█ ██▄ ░█░ █▀█ █▄█ █▄▀ ▄█
All methods return a value, the original one never gets modified.

-> Math.abs(x) Returns the absolute value of x
-> Math.ceil(x) Returns the largest integer greater than or equal to a number.
-> Math.floor(x) Returns the smallest integer less than or equal to a number.
-> Math.pow(x, y) Returns the power from x to y.
-> Math.sqrt(x) Returns the square root of x.
-> Math.random() Generates a pseudo-random number between 0 and 1.
-> Math.round(x) Returns the value of a number rounded to the nearest integer..
-> Math.sign(x) Returns the sign of the x, which indicates whether x is positive, negative or zero.
-> Math.sqrt(x) Returns the square root of x.
*/

let number = 12.7;
console.log("Number E: " + Math.E); // 2.718281828459045
console.log("PI Number: " + Math.PI); // 3.141592653589793

console.log("Absolute value: " + Math.abs(number));
console.log("Largest integer: " + Math.ceil(number));
console.log("Smallest integer: " + Math.floor(number));
console.log("Power of 3^3: " + Math.pow(3, 3));

/* x100 multiplier will give us a number between 0 and 100. 
Changing the multiplier to 10 will give us a random number between 0 and 10. 
We use Math.round to get an absolute value. */
console.log("Number between 0 and 100: " + Math.round(Math.random() * 100));

//console.log(Math.random() * (max - min)+min);
/* We can set a minimun and max value to get numbers, 
for example, between 50 and 100. */
console.log(
  "Number between 50 and 100: " + Math.round(Math.random() * (100 - 50) + 50)
);

console.log(
  "-1 if negative, 0 if 0 or 1 if positive: " +
    Math.sign(Math.round(Math.random() * (100 - -100) + -100)) // generates number between -100 and 100
); // -1 | 0 | 1
console.log("Square root of x: " + Math.sqrt(2));
