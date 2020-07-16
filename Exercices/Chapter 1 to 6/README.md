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

5.  Escriba un programa que pida un número entero mayor que cero y calcule su factorial.

    > El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.

            !5 = 5*4*3*2*1 = 120

6.  Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50.

    Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido

7.  Crea 3 arrays:

        - El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10,
        - Si el resultado es par guarda ese número en el array de pares
        - Si es impar en el array de impares.

    Muestra en la consola:

    - La multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    - El array de pares e impares

8.  Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23

    ```js
    const letras = [
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

9.  Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.

10. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
