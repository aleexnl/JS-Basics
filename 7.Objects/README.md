<p  align="center">
    <img src="../assets/img/icon.jpg"/>
</p>
<h2 align="center"><strong>NEWBIE JAVASCRIPT CHEAT SHEETS</strong></h2>

# JavaScript Objects

## 1. Introduction

Objects are data structures that represent properties, values and actions that the object can do. All objects have properties or attributes and behavior or actions represented with `key : value`

```js
const laptop = {
    screenSize: 13,
    model: "MacBook Pro"
};
}
```

## 2. For in

This is a determited loop, since we know how many times will execute the code, but we do not need to specify the increment. It returns the index position.

```js
let carBrands = ["Mercedes", "BMW", "Ferrari", "Peugeot"];
for (index in CarBrands) {
  console.log(`Actual position: ${index}`);
}
```
