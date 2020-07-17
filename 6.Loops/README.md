<p  align="center">
    <img src="../assets/img/icon.jpg"/>
</p>
<h2 align="center"><strong>NEWBIE JAVASCRIPT CHEAT SHEETS</strong></h2>

# JavaScript for of & for in loop

## 1. For of

This is a determited loop, since we know how many times will execute the code, but we do not need to specify the increment..

```js
let carBrands = ["Mercedes", "BMW", "Ferrari", "Peugeot"];
for (carBrand of CarBrands) {
  console.log(carBrand);
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
