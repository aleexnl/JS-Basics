<p  align="center">
    <img src="../assets/img/icon.jpg"/>
</p>
<h2 align="center"><strong>NEWBIE JAVASCRIPT CHEAT SHEETS</strong></h2>

# JavaScript Functions

## 1. Introduction

Functions are used to execute specific pieces of code that return a result, allowing us to keep code clean and modularized.

```js
// Default statement
function functionName() {
  // code here
}

// ES6 Statement
const functionName = () => {
  // code here
};
```

## 2. Arguments

Functions can work with external arguments, modifying them or using them to retrieve a new result.

```js
// Default statement
function functionName(arg, moreArg) {
  // code here
}

// ES6 Statement
const functionName = (arg, moreArg) => {
  // code here
};
```

When we want to retrieve a new result and use that result later, we need to use the `return` statement.

```js
// Default statement
function functionName(arg, moreArg) {
  return arg + moreArg;
}

// ES6 Statement
const functionName = (arg, moreArg) => arg + moreArg;
```

> `return` will stop the function execution.
