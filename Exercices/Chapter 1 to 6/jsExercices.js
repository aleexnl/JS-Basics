// EXERCICE 1
function exerciceOne() {
  let name = prompt("Input your name:");
  let age = parseInt(prompt("Input your age:"));
  let msg; // Variable to build the message

  if (typeof name == "string" && name.length > 0) {
    msg = `Hello ${name}.`;
  } else {
    msg = `Hello Anonymous.`;
  }

  if (isNaN(age)) {
    msg += " I do not know your age.";
  } else {
    msg += ` You are ${age} years old. The next year you will be ${
      age + 1
    } years old.`;
  }

  console.log(msg);
}
function exerciceOneSimple() {
  let name = prompt("Input your name:");
  let age = parseInt(prompt("Input your age:"));

  console.log(
    `Hello ${name}. You are ${age} years old and the next year you will be ${
      age + 1
    } years old.`
  );
}

// EXERCICE 2
function exerciceTwo() {
  let option;
  let base;
  let height;
  let radius;
  console.log("CALCULATE AREAS:\n1. Triangle\n2. Rectangle\n3. Circle  ");
  option = prompt("Choose an option");

  switch (option) {
    case "1":
      console.log("TRIANGLE AREA");
      base = parseFloat(prompt("Input the triangle base"));
      height = parseFloat(prompt("Input the triangle height"));
      if (!isNaN(base) && !isNaN(height)) {
        console.log("Calculating area...");
        console.log(`TRIANGLE AREA: ${base * (height / 2)}`);
        break;
      } else {
        console.log("ERROR: Did you type numbers?");
        break;
      }
    case "2":
      console.log("RECTANGLE AREA");
      base = parseFloat(prompt("Input the triangle base"));
      height = parseFloat(prompt("Input the triangle height"));
      if (!isNaN(base) && !isNaN(height)) {
        console.log("Calculating area...");
        console.log(`RECTANGLE AREA: ${base * height}`);
        break;
      } else {
        console.log("ERROR: Did you type numbers?");
        break;
      }
    case "3":
      console.log("CIRCLE AREA");
      radius = parseFloat(prompt("Input the circle radius"));
      if (!isNaN(radius)) {
        console.log("Calculating area...");
        console.log(`CIRCLE AREA: ${Math.PI * Math.pow(radius, 2)}`);
        break;
      } else {
        console.log("ERROR: Did you type numbers?");
        break;
      }

    default:
      console.log("ERROR: Not an option of the list");
  }
}

// EXERCICE 3
function exerciceThree() {
  const number = parseFloat(prompt("Input an integer"));

  if (!isNaN(number)) {
    for (let index = 1; index <= number; index++) {
      if (index % 2 == 0) {
        console.log(`${index} is an even number.`);
      } else {
        console.log(`${index} is an odd number.`);
      }
    }
  } else {
    console.log("ERROR: Did you input a number?");
  }
}

// EXERCICE 4
function exerciceFour() {
  const number = parseInt(prompt("Type an integer number greater than 1."));
  let isPrime;
  if (!isNaN(number) && number > 1) {
    for (let index = 2; index < number; index++) {
      if (Number.isInteger(number / index)) {
        console.log(`${number} is not a prime number.`);
        break;
      }
      isPrime = true;
    }
    if (isPrime) console.log(`${number} is a prime number.`);
  } else {
    console.log("ERROR: Did you input a number greater than 1?");
  }
}

// EXERCICE 5
function exerciceFive() {
  const number = parseInt(prompt("Type an integer number greater than 0."));
  let factorial = [];
  let total = 1;

  if (!isNaN(number) && number > 0) {
    for (let index = number; index != 0; index--) {
      factorial.push(index);
      total *= index;
    }
    console.log(`Factorial of ${number}: ${factorial.join(",")} = ${total}`);
  } else {
    console.log("ERROR: Did you input a number greater than 0?");
  }
}

// EXERCICE 6
function exerciceSix() {
  let total = 0;
  let numbers = [];
  let number;

  while (total < 50) {
    number = parseFloat(prompt("Input a number greater than 0."));
    if (!isNaN(number) && number > 0) {
      total += number;
      numbers.push(number);
    }
    console.log(
      `You passed the total of 50 (${total}). You wrote ${
        numbers.length
      } numbers before passing the total.
      The numbers you wrote were: ${numbers.join(", ")}`
    );
  }
}

// EXERCICE 7
function exerciceSeven() {
  let numbers = []; // Array where numbers will be sotred
  let oddNumbers = [];
  let evenNumbers = [];

  // generate the number array randomly
  for (let index = 0; index <= 5; index++) {
    const randNumber = Math.floor(Math.random() * 10) + 1;
    numbers.push(randNumber);
  }
  console.log(`Number array: ${numbers.join(", ")}`);
  for (const number of numbers) {
    const randNumber = Math.floor(Math.random() * 10) + 1; // generate random number between 1 and 10
    result = number * randNumber; // Calculate the result
    console.log(`${number} * ${randNumber} = ${result}`); // Custom console log message
    if (result % 2 == 0) {
      // if even number
      evenNumbers.push(result);
    } else {
      // else
      oddNumbers.push(result);
    }
  }
  console.log(`Even numbers array: ${evenNumbers.join(", ")}`); // show formated array list
  console.log(`Odd numbers array: ${oddNumbers.join(", ")}`);
}

// EXERCICE 8
function exerciceEight() {
  const dniNumber = parseInt(
    prompt("Input your DNI number (no more than 8 numbers")
  );
  const dniLetters = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];

  if (!isNaN(dniNumber) && dniNumber.toString().length == 8) {
    const dniLetter = dniLetters[dniNumber % 23];
    console.log(`Your DNI letter is ${dniLetter}.`);
    console.log(`Your complete DNI is ${dniNumber + dniLetter}.`);
  } else {
    console.log("ERROR: Did you write an 8-digit number?");
  }
}
// EXERCICE 9
function exerciceNine() {}

// EXERCICE 10
function exerciceTen() {}
