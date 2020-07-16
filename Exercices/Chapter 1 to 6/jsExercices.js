// EXERCICE 1
function exerciceOne() {
  let name = prompt("Input your name:");
  let lastname = prompt("Input your lastname:");
  let age = prompt("Input your age:");
  let msg; // Variable to build the message

  if (typeof name == "string" && name.length > 0) {
    msg = `Hello ${name}`;
  } else {
    msg = `Hello Anonymous`;
  }

  if (typeof lastname == "string" && lastname.length > 0) {
    msg += ` ${lastname}`;
  }

  if (isNaN(parseInt(age))) {
    msg += ". I do not know your age.";
  } else {
    msg += ` You are ${age} years old. The next year you will be ${
      parseInt(age) + 1
    } years old.`;
  }

  console.log(msg);
}

function exerciceOneSimple() {
  let name = prompt("Input your name:");
  let lastname = prompt("Input your lastname:");
  let age = prompt("Input your age:");

  console.log(
    `Hello ${name} ${lastname}. You are ${age} years old and the next year you will be ${
      parseInt(age) + 1
    } years old.`
  );
}
