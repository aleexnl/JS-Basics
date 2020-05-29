# JavaScript Basics

## 1. Introduction

- **Case senstitive**: _A variable with name Number is not the same as a variable called number._
- **Dynamic typing**: _The interpreter assigns variables a type at runtime based on the variable's value at the time._
- **End of sentences:** _Sentences always end with ;._
- **End of block:** _The blocks end with }. Optionally we can also close them with ; after the }._

### 1.1 Variables

Variables are a reserved space in memory to store information that could change during the program execution.
To declare a variable we use the reserved word _let_. It's not recomended to use _var_ since ECMAScript6
We can declare, inicialize and modify them.

```js
let variable; //Declare a variable
variable = "Hello World!"; // Inicialize a variable
let variable2 = "Hello World!"; // Declare and inicialize
```

### 1.2 Constants

They are the same as variables, but they can't change.
They are declared with the reserved word _const_.
We must declare and inicialize the constant in the same sentence.

```js
const pi = 3.14;
```

### 1.3 Scope/Ambit

The scope or ambit is where our variable or constant exists. Depending on where we declare our variable, we will be able to use it or not.

## 2. Primitive Data types

### 2.1 Number

JS does not distinct between decimal or non decimal numbers.

```js
let numvar = 5;
let decvar = 5.5;
```

### 2.2 String

Whenever we declare a string it has to be in quotes (single or double).

```js
let string = "Hello World!";
```

### 2.3 Boolean

Logic data type (true or false). Used in conditionals.

```js
let isOn = false;
let isOn = true;
```

### 2.4 Undefined

### 2.5 Null

### 2.6 Symbol

## 3. Operators

| Mathematic        |     |
| ----------------- | --- |
| _Sum/Concatenate_ | +   |
| _Substract_       | -   |
| _Multiply_        | \*  |
| _Divide_          | /   |
| _Module_          | %   |

Module is used to get the subtract of the division.

```js
let num;
num = 5 + 5;
num = 10 - 2;
num = 8 * 3;
num = 24 / 3;
num = 8 % 2;
```

| Asignation                 |     |
| -------------------------- | --- |
| _Asignation_               | =   |
| _Sum and asignation_       | +=  |
| _Substract and asignation_ | -=  |
| _Multiply and asignation_  | \*= |
| _Divide and asignation_    | /=  |
| _Module and asignation_    | %=  |

```js
let num;
num = 5;
num += 5;
num -= 2;
num *= 3;
num /= 3;
num %= 2;
```
