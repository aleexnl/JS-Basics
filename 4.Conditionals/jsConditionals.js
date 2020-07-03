/*
░█████╗░░█████╗░███╗░░██╗██████╗░██╗████████╗██╗░█████╗░███╗░░██╗░█████╗░██╗░░░░░░██████╗
██╔══██╗██╔══██╗████╗░██║██╔══██╗██║╚══██╔══╝██║██╔══██╗████╗░██║██╔══██╗██║░░░░░██╔════╝
██║░░╚═╝██║░░██║██╔██╗██║██║░░██║██║░░░██║░░░██║██║░░██║██╔██╗██║███████║██║░░░░░╚█████╗░
██║░░██╗██║░░██║██║╚████║██║░░██║██║░░░██║░░░██║██║░░██║██║╚████║██╔══██║██║░░░░░░╚═══██╗
╚█████╔╝╚█████╔╝██║░╚███║██████╔╝██║░░░██║░░░██║╚█████╔╝██║░╚███║██║░░██║███████╗██████╔╝
░╚════╝░░╚════╝░╚═╝░░╚══╝╚═════╝░╚═╝░░░╚═╝░░░╚═╝░╚════╝░╚═╝░░╚══╝╚═╝░░╚═╝╚══════╝╚═════╝░
Control behavior in JavaScript and determine whether or not pieces of code can run.
*/

let isOn = true;
let isPlugged = true;

// Simple conditional
if (isOn) {
  console.log("Lamp is turned on.");
}

// Compound conditional
if (isOn) {
  console.log("Lamp is turned on.");
} else {
  console.log("Lamp is turned off.");
}

// Multiple conditional
if (isOn && isPlugged) {
  console.log("Lamp is turned on.");
} else if (isOn && !isPlugged) {
  console.log("Lamp is turned on, but not plugged.");
} else {
  console.log("Lamp is turned off.");
}

/* Exercice: Permutation 3 numbers
Order greater to lower number with a conditional.
 */
let a = 5;
let b = 8;
let c = 90;

// Check if a is the greatest number
if (a >= b && a >= c) {
  // Check if b is greater than c
  if (b >= c) {
    console.log(`${a}, ${b}, ${c}`);
    // If not, we got the right order
  } else {
    console.log(`${a}, ${c}, ${b}`);
  }
  // Check if b is the greatest number
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log(`${b}, ${a}, ${c}`);
  } else {
    console.log(`${b}, ${c}, ${a}`);
  }
  // Check if c is the greatest number
} else if (c >= a && c >= b) {
  if (a >= b) {
    console.log(`${c}, ${a}, ${b}`);
  } else {
    console.log(`${c}, ${b}, ${a}`);
  }
}
