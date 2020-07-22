/* 
██████╗░░█████╗░███╗░░░███╗  ████████╗██████╗░░█████╗░██╗░░░██╗███████╗██████╗░░██████╗██╗███╗░░██╗░██████╗░
██╔══██╗██╔══██╗████╗░████║  ╚══██╔══╝██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔══██╗██╔════╝██║████╗░██║██╔════╝░
██║░░██║██║░░██║██╔████╔██║  ░░░██║░░░██████╔╝███████║╚██╗░██╔╝█████╗░░██████╔╝╚█████╗░██║██╔██╗██║██║░░██╗░
██║░░██║██║░░██║██║╚██╔╝██║  ░░░██║░░░██╔══██╗██╔══██║░╚████╔╝░██╔══╝░░██╔══██╗░╚═══██╗██║██║╚████║██║░░╚██╗
██████╔╝╚█████╔╝██║░╚═╝░██║  ░░░██║░░░██║░░██║██║░░██║░░╚██╔╝░░███████╗██║░░██║██████╔╝██║██║░╚███║╚██████╔╝
╚═════╝░░╚════╝░╚═╝░░░░░╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝╚═╝░░╚══╝░╚═════╝░
*/

const list = document.getElementById("list");

/*
█▀█ ▄▀█ █▀█ █▀▀ █▄░█ ▀█▀
█▀▀ █▀█ █▀▄ ██▄ █░▀█ ░█░
Descendant's Node.

Nodes of type Document and DocumentFragment will never have a parent element, 
parentNode and parentElement will always return null.
*/

// .parentNode -> Returns the parent node (it could not be an element)
console.log("Parent node of list:");
console.log(list.parentNode);

// .parentElement -> Returns the parent node element.
console.log("Parent node element of list:");
console.log(list.parentElement);

/*
█▀▀ █░█ █ █░░ █▀▄
█▄▄ █▀█ █ █▄▄ █▄▀
Node that descends from a parent.
 */

// .childNodes -> Returns all child nodes.
console.log("Child nodes of list:");
console.log(list.childNodes);

// .children -> Returns all child element nodes.
console.log("Child element nodes of list:");
console.log(list.children);

// .firstChild -> Returns the first child node.
console.log("First child node of list:");
console.log(list.firstChild);

// .firstElementChild -> returns the first child element node.
console.log("First child element node of list:");
console.log(list.firstElementChild);

// .lastChild -> Returns the last child node.
console.log("Last child node of list:");
console.log(list.lastChild);

// .lastElementChild -> Returns the last child element node.
console.log("Last child element node of list:");
console.log(list.lastElementChild);

// .hasChildNodes() -> Returns true or false depending if the node has any child element.
console.log(`Does the list has any child node? ${list.hasChildNodes()}`);

/*
█▀ █ █▄▄ █░░ █ █▄░█ █▀▀ █▀
▄█ █ █▄█ █▄▄ █ █░▀█ █▄█ ▄█
Nodes at the same level
*/

// .nextSibling -> Returns the next sibling node.
console.log("Next sibling node of list:");
console.log(list.nextSibling);

// .nextElementSibling -> Returns the next sibling element node.
console.log("Next sibling element node of list:");
console.log(list.nextElementSibling);

// .previousSibling -> Returns the previous sibling node
console.log("Previous sibling node of list:");
console.log(list.previousSibling);

// .previousElementSibling -> Returns the previous sibling element node
console.log("Previous sibling element node of list:");
console.log(list.previousElementSibling);

/*
█▀▀ █░░ █▀█ █▀ █▀▀ █▀ ▀█▀
█▄▄ █▄▄ █▄█ ▄█ ██▄ ▄█ ░█░
*/

// .closest(selector) -> Select the closest node that meets the selector.
console.log("Closest nav to the list:");
console.log(list.closest("nav"));
