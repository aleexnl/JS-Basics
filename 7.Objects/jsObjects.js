/* 
░█████╗░██████╗░░░░░░██╗███████╗░█████╗░████████╗░██████╗
██╔══██╗██╔══██╗░░░░░██║██╔════╝██╔══██╗╚══██╔══╝██╔════╝
██║░░██║██████╦╝░░░░░██║█████╗░░██║░░╚═╝░░░██║░░░╚█████╗░
██║░░██║██╔══██╗██╗░░██║██╔══╝░░██║░░██╗░░░██║░░░░╚═══██╗
╚█████╔╝██████╦╝╚█████╔╝███████╗╚█████╔╝░░░██║░░░██████╔╝
░╚════╝░╚═════╝░░╚════╝░╚══════╝░╚════╝░░░░╚═╝░░░╚═════╝░
*/

const car = {
  brand: "BMW",
  colour: "Electric Blue",
  doors: 2,
  accessories: ["GPS", "Park assistant", "Apple Car", "WiFi"],
};

console.log(`Car brand: ${car.brand}`); // BMW
console.log(`Car colour: ${car.colour}`); // Electric Blue
console.log(`Number of doors: ${car.doors}`); // 2

// We can use for in to go through all the keys and values of an object.
for (const key in car) {
  console.log(`${key} : ${car[key]}`);
}

// We can use for of to go through an array in an object.
console.log("The car has this accessories: ");
for (const accessory of car.accessories) {
  console.log(accessory);
}
