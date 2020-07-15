// EXERCICE 1
function exerciceOne() {
  let name = prompt("Input your name:");
  let lastname = prompt("Input your lastname:");
  let age = prompt("Input your age:");

  console.log(`Hello ${name} ${lastname}.`);

  // If we can't retrieve a int from the string, we won't show the age.
  if (isNaN(parseInt(age))) {
    // parseInt allows you to get a integer from a string.
    console.log("I do not know your age.");
  } else {
    console.log(
      ` You are ${age} years old. The next year you will be ${
        parseInt(age) + 1
      } years old.`
    );
  }
}
