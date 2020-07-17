/*
░█████╗░░█████╗░██████╗░
██╔══██╗██╔══██╗██╔══██╗
██║░░██║██║░░██║██████╔╝
██║░░██║██║░░██║██╔═══╝░
╚█████╔╝╚█████╔╝██║░░░░░
░╚════╝░░╚════╝░╚═╝░░░░░ 

█▀█ █▄▄ ░░█ █▀▀ █▀▀ ▀█▀   █▀█ █▀█ █ █▀▀ █▄░█ ▀█▀ █▀▀ █▀▄   █▀█ █▀█ █▀█ █▀▀ █▀█ ▄▀█ █▀▄▀█ █▀▄▀█ █ █▄░█ █▀▀
█▄█ █▄█ █▄█ ██▄ █▄▄ ░█░   █▄█ █▀▄ █ ██▄ █░▀█ ░█░ ██▄ █▄▀   █▀▀ █▀▄ █▄█ █▄█ █▀▄ █▀█ █░▀░█ █░▀░█ █ █░▀█ █▄█
*/

class Person {
  constructor(name, lastName, age) {
    // argument properties.
    this.name = name; // this refers to the object.
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    // Method to greet
    return `Hello, my name is ${this.name} ${this.lastName} and I'm ${this.age} years old.`; // `this` to refer the object property
  }
  bye() {
    return `Bye ${this.name} ${this.lastName}!`;
  }
}

const alex = new Person("Alejandro", "Nieto", "18");
console.log(`${alex.name} ${alex.lastName}`);
console.log(alex.greet());
