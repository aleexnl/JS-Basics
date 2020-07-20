/*
███╗░░██╗░█████╗░██████╗░███████╗░██████╗  ██╗███╗░░██╗  ██████╗░░█████╗░███╗░░░███╗
████╗░██║██╔══██╗██╔══██╗██╔════╝██╔════╝  ██║████╗░██║  ██╔══██╗██╔══██╗████╗░████║
██╔██╗██║██║░░██║██║░░██║█████╗░░╚█████╗░  ██║██╔██╗██║  ██║░░██║██║░░██║██╔████╔██║
██║╚████║██║░░██║██║░░██║██╔══╝░░░╚═══██╗  ██║██║╚████║  ██║░░██║██║░░██║██║╚██╔╝██║
██║░╚███║╚█████╔╝██████╔╝███████╗██████╔╝  ██║██║░╚███║  ██████╔╝╚█████╔╝██║░╚═╝░██║
╚═╝░░╚══╝░╚════╝░╚═════╝░╚══════╝╚═════╝░  ╚═╝╚═╝░░╚══╝  ╚═════╝░░╚════╝░╚═╝░░░░░╚═╝

document.getElementById("id"); -> Access element using an id
document.querySelector("cssSelector") -> Access to the first element that has the css selector.
document.querySelectorAll("cssSelector") -> Access to all elements that has the css selector (returns a node list).;
*/

const title = document.getElementById("title"); // elements are stored in constants because they never change.
title.textContent = "DOM - Accessing to nodes"; // Change node properties using js.

const paragraph = document.querySelector(".paragraph"); // We need to use the CSS Selector (class)
paragraph.textContent = "This should be a lorem ipsum text";

const span = document.querySelector("h2").querySelector("span"); // We can also access elements like this.
span.textContent = "World!";

const paragraphs = document.querySelectorAll(".paragraph");
console.log(paragraphs); // This is a NodeList, so we can't use most of Array methods.
// paragraphs.map((p) => (p.style.color = "green")); // We can't use this method.

const paragraphSpread = [...document.querySelectorAll(".paragraph")];
console.log(paragraphSpread); // We can create an array of nodes using the spread operator
paragraphSpread.map((p) => (p.style.color = "green")); // Change color of the paragraphs.

// This one is more recommended for compatibility.
const paragraphArray = Array.from(document.querySelectorAll(".paragraph"));
console.log(paragraphArray); // We can also create an array using Array.from() method.
paragraphArray.map((p) => (p.style.fontFamily = "arial")); // Change font of the paragraphs.
