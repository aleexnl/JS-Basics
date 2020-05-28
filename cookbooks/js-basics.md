# JavaScript Basics

## Introduction

- **Case senstitive**: _A variable with name Number is not the same as a variable called number._
- **Dynamic typing**: _The interpreter assigns variables a type at runtime based on the variable's value at the time._
- **End of sentences:** _Sentences always end with ;._
- **End of block:** _The blocks end with }. Optionally we can also close them with ; after the }._

### Variables

Variables are a reserved space in memory to store information that could change during the program execution.
To declare a variable we use the reserved word _let_. It's not recomended to use _var_ since ECMAScript6
We can declare, inicialize and modify them.

```js
let variable; //Declare a variable
variable = "Hello World!"; // Inicialize a variable
let variable2 = "Hello World!"; // Declare and inicialize
```

### Constants

They are the same as variables, but they can't change.
They are declared with the reserved word _const_.
We must declare and inicialize the constant in the same sentence.

```js
const pi = 3.14;
```

### Scope/Ambit

The scope or ambit is where our variable or constant exists. Depending on where we declare our variable, we will be able to use it or not.

## Data types

### Primitive

#### Number

JS does not distinct between decimal or non decimal numbers.

```js
let numvar = 5;
let decvar = 5.5;
```

#### String

Whenever we declare a string it has to be in quotes (single or double).

```js
let string = "Hello World!";
```

#### Boolean

Logic data type (true or false). Used in conditionals.

```js
let isOn = false;
let isOn = true;
```

#### Undefined

#### Null

#### Symbol
