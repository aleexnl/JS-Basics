# JavaScript Ternary Operator

## 1. Introduction

A ternary operator evaluates a condition and executes a block of code based on the condition.

## 2. Ternary Operator

```js
condition ? expression1 : expression2;
```

The ternary operator evaluates the test condition.

- If the condition is true, expression1 is executed.
- If the condition is false, expression2 is executed.

The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.

## 3. Nested ternary operators

You can also nest one ternary operator as an expression inside another ternary operator.

```js
// program to check if number is positive, negative or zero
let a = 3;
let result = a >= 0 ? (a == 0 ? "zero" : "positive") : "negative";
console.log(`The number is ${result}.`);
```
