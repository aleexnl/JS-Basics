<p  align="center">
    <img src="../assets/img/icon.jpg"/>
</p>
<h2 align="center"><strong>NEWBIE JAVASCRIPT CHEAT SHEETS</strong></h2>

# JavaScript Arrays

## 1. Introduction

A variable can store a single element. If you need to store multiple elements at once, you can use an array.

```js
let cars = ["Seat", "Peugeot", "BMW"];
```

- They can store all type of data.

- Different data types can be stored in the same array, but it is not a recommended practice.

- They can be declared with an array literal (`[]`) or using the `new` keyword.

```js
let cars = ["Seat", "Peugeot", "BMW"];
let computers = new Array("Gigabyte", "ASUS", "MSI");
```

> **Note:** It is recommended to always use the literal declaration.

- Array first position is always 0.

```js
let cars = ["Seat", "Peugeot", "BMW"];
console.log(cars[0]); // Output: Seat
console.log(cars[1]); // Output: Peugeot
console.log(cars[2]); // Output: BMW
```
