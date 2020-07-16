# JAVASCRIPT EXERCICES

## From the content of Chapter 1 to Chapter 6.

1.  Request a name, age and show the console message `Hello __ . You are __ years old and next year you will be ___ years old`. Perform the exercise with `prompt(msg)` and make use of the template strings.

2.  Write a program that can calculate the area of 3 geometric figures. First ask which figure you want to calculate the area of, then ask for the data you need to calculate it.

    > **Triangle:** b \* h/2
    >
    > **Rectangle:** b \* h
    >
    > **Circle:** π \* r<sup>2</sup>

3.  Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje `es par` o `es impar`.

4.  Write a program that asks for an integer greater than 1 and writes whether the prime number or not.

    > A prime number is one that is only divisible by itself and unity.

5.  Write a program that asks for an integer greater than zero and compute its factorial.

    > The factorial is the result of multiplying this number by its previous ones up to the unit.

            !5 = 5*4*3*2*1 = 120

6.  Write a program that allows you to enter an indeterminate series of numbers as long as their sum does not exceed 50. When this happens, the accumulated total and the counter of how many numbers have been entered should be displayed.

7.  Create 3 arrays:

    - The first will have 5 numbers and the second will be called even and the third odd; both will be empty. Then multiply each of the numbers in the first array by a random number between 1 and 10,
    - If the result is even save that number in the array of pairs
    - If it is odd in the odd array.

    Show in the console:

    - The multiplication that occurs along with its result in the format: `2 x 3 = 6`
    - The odd and even array.

8.  Given an array of letters, it requests a DNI number and calculates which letter corresponds to it. The number cannot be negative or have more than 8 digits. The position of the letter is the result of the module of the number entered between 23

    ```js
    const letters = [
      "T",
      "R",
      "W",
      "A",
      "G",
      "M",
      "Y",
      "F",
      "P",
      "D",
      "X",
      "B",
      "N",
      "J",
      "Z",
      "S",
      "Q",
      "V",
      "H",
      "L",
      "C",
      "K",
      "E",
      "T",
    ];
    ```

9.  Ask the user for a word and show by console the number of consonants, vowels and length of the word.

10. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
