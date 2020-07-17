<p  align="center">
    <img src="../assets/img/icon.jpg"/>
</p>
<h2 align="center"><strong>NEWBIE JAVASCRIPT CHEAT SHEETS</strong></h2>

# JavaScript Object Oriented Programming

## 1. Introduction

It's a different programming paradigm from structured programming. Some fundamental concepts of OOP programming are: Classes, Inheritance, Objects, Methods, Events, etc.

## 2. Classes

Since ES6 we can create classes in JavaScript.
Classes are like molds to create objects, making easier to make them. When we make an object we call that action `instantiate an object`.
Classes need a constructor function. It needs to be called `constructor` and it is executed every time we create an object.

```js
// Class names need to be capitalized.
class Person {
  constructor(name, lastName, age) {
    // argument properties.
    this.name = name; // this refers to the object.
    this.lastName = lastName;
    this.age = age;
  }
}
```

We can assign undefined properties in the class using the reserved word `this`

```js
this.info = `${car} ${money}`;
```

## 3. Methods

Methods are functions linked to the object.

```js
// Class names need to be capitalized.
class Person {
  constructor(name, lastName, age) {
    // argument properties.
    this.name = name; // this refers to the object.
    this.lastName = lastName;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} ${this.lastName} and I'm ${this.age} years old.`;
  }
}
```

## 4. Create objects

We need to create the object using the reserved word `new` and the name of the class. Also we need to give the needed arguments to instantiate it.

```js
const juan = new Person("Juan", "Ramírez", 35);
```

Once the object is instantiated, we can use it as it was a normal object.

```js
console.log(juan.name);
juan.greet();

console.log(juan["name"]);
console.log(juan["greet"]());
```
