/*
░██████╗████████╗██████╗░██╗███╗░░██╗░██████╗░░██████╗  ██╗███╗░░██╗  ░░░░░██╗░██████╗
██╔════╝╚══██╔══╝██╔══██╗██║████╗░██║██╔════╝░██╔════╝  ██║████╗░██║  ░░░░░██║██╔════╝
╚█████╗░░░░██║░░░██████╔╝██║██╔██╗██║██║░░██╗░╚█████╗░  ██║██╔██╗██║  ░░░░░██║╚█████╗░
░╚═══██╗░░░██║░░░██╔══██╗██║██║╚████║██║░░╚██╗░╚═══██╗  ██║██║╚████║  ██╗░░██║░╚═══██╗
██████╔╝░░░██║░░░██║░░██║██║██║░╚███║╚██████╔╝██████╔╝  ██║██║░╚███║  ╚█████╔╝██████╔╝
╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═════╝░╚═════╝░  ╚═╝╚═╝░░╚══╝  ░╚════╝░╚═════╝░
*/

let msg = "Hello World!"; // We will use this String to work.

/*
█▀█ █▀█ █▀█ █▀█ █ █▀▀ █▀█ ▀█▀ █ █▀▀ █▀
█▀▀ █▀▄ █▄█ █▀▀ █ ██▄ █▀▄ ░█░ █ ██▄ ▄█
*/

// length -> Returns string's lenght (Space counts as a character)
console.log("String lenght: " + msg.length); // Result: 12

/*
█▀▄▀█ █▀▀ ▀█▀ █░█ █▀█ █▀▄ █▀
█░▀░█ ██▄ ░█░ █▀█ █▄█ █▄▀ ▄█
All methods return a new string, the original one never gets modified.
*/

// toUpperCase() -> Returns string in uppercase
console.log("String uppercase: " + msg.toUpperCase()); // Result: HELLO WORLD!
let msgUpper = msg.toUpperCase(); // We can save the method result into a variable.
console.log("String uppercase: " + msgUpper); // Result: HELLO WORLD!

// toLowerCase() -> Returns the string in lowercase
console.log("String lowercase: " + msg.toLowerCase()); // Result: hello world!

//indexOf(string) -> Returns the position of the specified string. If it's not found, will return -1
console.log("Position of o: " + msg.indexOf("o")); // Result: 4
console.log("Position of Hello: " + msg.indexOf("Hello")); // Result: 0
console.log("Position of Bye: " + msg.indexOf("Bye")); // Result: -1

// replace(search, replace) -> Replaces the searched string for the specified in the replace argument.
console.log("Replaced text: " + msg.replace("World", "Team")); // Result: Hello Team!

// substring(start [,end]) -> Substracts the characters from the position to the end if not especified.
console.log("Substracted text with no end: " + msg.substring(1)); // Result: ello World!
console.log("Substracted text with end: " + msg.substring(1, 8)); // Result: ello Wo

// slice(start [,end]) -> Same as substring. Slice allows negative values, so it will start backwards if one is specified.
console.log("Slice backwards: " + msg.slice(-3)); // Result: ld!
console.log("Slice forward: " + msg.slice(2)); // Result: llo World!
console.log("Slice portion: " + msg.slice(0, -2)); // Result: Hello Worl

// trim()-> Deletes spaces at the start and at the end of the string.
let welcome = "Hello world! We are working with strings";
console.log("Message with no spaces:" + welcome.trim());

/*
░██████╗████████╗██████╗░██╗███╗░░██╗░██████╗░░██████╗  ██╗███╗░░██╗  ░░░░░██╗░██████╗
██╔════╝╚══██╔══╝██╔══██╗██║████╗░██║██╔════╝░██╔════╝  ██║████╗░██║  ░░░░░██║██╔════╝
╚█████╗░░░░██║░░░██████╔╝██║██╔██╗██║██║░░██╗░╚█████╗░  ██║██╔██╗██║  ░░░░░██║╚█████╗░
░╚═══██╗░░░██║░░░██╔══██╗██║██║╚████║██║░░╚██╗░╚═══██╗  ██║██║╚████║  ██╗░░██║░╚═══██╗
██████╔╝░░░██║░░░██║░░██║██║██║░╚███║╚██████╔╝██████╔╝  ██║██║░╚███║  ╚█████╔╝██████╔╝
╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝░╚═════╝░╚═════╝░  ╚═╝╚═╝░░╚══╝  ░╚════╝░╚═════╝░

███████╗░██████╗░█████╗░
██╔════╝██╔════╝██╔═══╝░
█████╗░░╚█████╗░██████╗░
██╔══╝░░░╚═══██╗██╔══██╗
███████╗██████╔╝╚█████╔╝
╚══════╝╚═════╝░░╚════╝░
*/

/*
█▀▄▀█ █▀▀ ▀█▀ █░█ █▀█ █▀▄ █▀
█░▀░█ ██▄ ░█░ █▀█ █▄█ █▄▀ ▄█
All methods return a new string, the original one never gets modified.
*/

// startsWith(value [,index]) -> Evaluates if the value starts with the specified index
console.log("Starts with H? " + msg.startsWith("H")); // Result: true
console.log("Starts with h? " + msg.startsWith("h")); // Result: false
console.log("Starts with W? " + msg.startsWith("W", 6)); // Result: true

//endsWith(valor [,lenght]) -> Evaluates if the value ends with the specified index.
console.log("Ends with !? " + msg.endsWith("!")); // true
console.log("Ends with H? " + msg.endsWith("a", 4)); // false
console.log("Ends with o? " + msg.endsWith("o", 5)); // true
console.log("Ends with World!? " + msg.endsWith("World!")); // true

//includes(value[,index]) -> Search if the string has the specified character (optional arg: where to start to count)
console.log("Has n in string? " + msg.includes("n")); // false
console.log("Has o in string starting in position 5? " + msg.includes("o", 5)); // true
console.log("Has o in string starting in position 2? " + msg.includes("H", 2)); // false

//repeat(value) -> Repeats the string the times indicated.
console.log("Repeated message: " + msg.repeat(3));
console.log("Repeated message: " + "Hello".repeat(10));

/*
▀█▀ █▀▀ █▀▄▀█ █▀█ █░░ ▄▀█ ▀█▀ █▀▀         █▀ ▀█▀ █▀█ █ █▄░█ █▀▀ █▀
░█░ ██▄ █░▀░█ █▀▀ █▄▄ █▀█ ░█░ ██▄         ▄█ ░█░ █▀▄ █ █░▀█ █▄█ ▄█
*/

let name = "Alex";
let surname = "Nieto";
let age = 18;

console.log(
  "Hello " + name + " " + surname + ". You're " + (age + 1) + " years old."
);

console.log(`Hello ${name} ${surname}. You're ${age} years old.`);

console.log(
  `Hello ${name} ${surname}. Next year you'll be ${age + 1} years old.`
);
