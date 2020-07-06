/*
░██████╗░██╗░░░░░░░██╗██╗████████╗░█████╗░██╗░░██╗
██╔════╝░██║░░██╗░░██║██║╚══██╔══╝██╔══██╗██║░░██║
╚█████╗░░╚██╗████╗██╔╝██║░░░██║░░░██║░░╚═╝███████║
░╚═══██╗░░████╔═████║░██║░░░██║░░░██║░░██╗██╔══██║
██████╔╝░░╚██╔╝░╚██╔╝░██║░░░██║░░░╚█████╔╝██║░░██║
╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝

░██████╗████████╗░█████╗░████████╗███████╗███╗░░░███╗███████╗███╗░░██╗████████╗
██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝████╗░████║██╔════╝████╗░██║╚══██╔══╝
╚█████╗░░░░██║░░░███████║░░░██║░░░█████╗░░██╔████╔██║█████╗░░██╔██╗██║░░░██║░░░
░╚═══██╗░░░██║░░░██╔══██║░░░██║░░░██╔══╝░░██║╚██╔╝██║██╔══╝░░██║╚████║░░░██║░░░
██████╔╝░░░██║░░░██║░░██║░░░██║░░░███████╗██║░╚═╝░██║███████╗██║░╚███║░░░██║░░░
╚═════╝░░░░╚═╝░░░╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░
The switch statement evaluates an expression and executes the corresponding body that matches the expression's result.
*/

let number = 2;
// Simple Syntax
// Each case is considered individually.
switch (number) {
  case 1:
    console.log(`${number} equals 1.`);
    break;
  case 2:
    console.log(`${number} equals 2.`);
    break;
  default:
    console.log(`${number} does not equal 1 or 2.`);
}

// Multiple Syntax
// Multiple value cases are evaluated at the same time.
switch (number) {
  case 1:
  case 3:
  case 5:
    console.log(`${number} is an odd number.`);
    break;
  case 2:
  case 4:
    console.log(`${number} is an even number.`);
    break;
  default:
    console.log(`${number} is not contemplated in any case.`);
}
