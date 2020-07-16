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
