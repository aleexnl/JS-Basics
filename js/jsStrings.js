// STRINGS IN JS
let msg = "Hello World!";

//PROPERTIES
// length -> Returns string's lenght (Space counts as a character)
console.log("String lenght: " + msg.length); // Result: 12

// METODOS
//All methods return a new string, the original one never gets modified.
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

//substring(start [,end]) -> Substracts the characters from the position to the end if not especified.
console.log("Substracted text with no end" + msg.substring(1)); // Result: ello World!
console.log("Substracted text with end" + msg.substring(1, 8)); // Result: ello Wo

/*
slice(inicio [,fin]) -> Igual que substring pero admite valores negativos, si ponemos valores negativos empezará desde atrás
Si no se incluye el final extrae hasta el final
	(2,-4) -> Empieza a contar en el tercer caracter y los 4 últimos no los considera
*/

/*console.log(cadena.slice(-3));
console.log(cadena.slice(2));
console.log(cadena.slice(0,-2));*/

/*
trim()-> Elimina los espacios al inicio y al final de la cadena
*/

/*let cadena2 = 'Hola youtube, estamos trabajando con cadenas';
console.log(cadena2.trim());*/

/*
--ES6--
startsWith(valor [,inicio]) -> Sirve para saber si la cadena empieza con ese valor. Devuleve true o false
*/

/*console.log(cadena.startsWith('H'));
console.log(cadena.startsWith('h'));
console.log(cadena.startsWith('M',5));*/

/*
endsWith(valor [,longitud]) -> Sirve para saber si la cadena termina con ese valor. Devuleve true o false
*/

/*console.log(cadena.endsWith('o'));
console.log(cadena.endsWith('a',4));
console.log(cadena.endsWith('n',8));
console.log(cadena.endsWith('Mundo'));*/

/*
includes(valor[,inicio]) -> Igual que indexOf pero devuelve true o false
*/

/*console.log(cadena.includes('n'));
console.log(cadena.includes('a',5));
console.log(cadena.includes('a',2));*/

/*
repeat(valor) -> Repite el string el número de veces que le indiquemos.
*/

/*let cadena3 = 'Hola';
console.log(cadena3.repeat(3));
console.log('r'.repeat(10));*/

/*Template Strings*/

let nombre = "Juan";
let apellido = "Gómez";
let edad = 20;

console.log(
  "Hola " + nombre + " " + apellido + ". Tienes " + (edad + 1) + " años."
);

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);

console.log(
  `Hola ${nombre} ${apellido}. El año que viene tendrás ${edad + 1} años.`
);
