/*
██╗███╗░░██╗░██████╗███████╗██████╗░████████╗  ░█████╗░███╗░░██╗██████╗░
██║████╗░██║██╔════╝██╔════╝██╔══██╗╚══██╔══╝  ██╔══██╗████╗░██║██╔══██╗
██║██╔██╗██║╚█████╗░█████╗░░██████╔╝░░░██║░░░  ███████║██╔██╗██║██║░░██║
██║██║╚████║░╚═══██╗██╔══╝░░██╔══██╗░░░██║░░░  ██╔══██║██║╚████║██║░░██║
██║██║░╚███║██████╔╝███████╗██║░░██║░░░██║░░░  ██║░░██║██║░╚███║██████╔╝
╚═╝╚═╝░░╚══╝╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░  ╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░

██████╗░███████╗██╗░░░░░███████╗████████╗███████╗  ███████╗██╗░░░░░███████╗███╗░░░███╗███████╗███╗░░██╗████████╗░██████╗
██╔══██╗██╔════╝██║░░░░░██╔════╝╚══██╔══╝██╔════╝  ██╔════╝██║░░░░░██╔════╝████╗░████║██╔════╝████╗░██║╚══██╔══╝██╔════╝
██║░░██║█████╗░░██║░░░░░█████╗░░░░░██║░░░█████╗░░  █████╗░░██║░░░░░█████╗░░██╔████╔██║█████╗░░██╔██╗██║░░░██║░░░╚█████╗░
██║░░██║██╔══╝░░██║░░░░░██╔══╝░░░░░██║░░░██╔══╝░░  ██╔══╝░░██║░░░░░██╔══╝░░██║╚██╔╝██║██╔══╝░░██║╚████║░░░██║░░░░╚═══██╗
██████╔╝███████╗███████╗███████╗░░░██║░░░███████╗  ███████╗███████╗███████╗██║░╚═╝░██║███████╗██║░╚███║░░░██║░░░██████╔╝
╚═════╝░╚══════╝╚══════╝╚══════╝░░░╚═╝░░░╚══════╝  ╚══════╝╚══════╝╚══════╝╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░╚═════╝░
*/

const list = document.getElementById("list");
const title = document.getElementById("title");

// .insertBefore(element, referenceElement) -> Insert an element before the referenced element.
const newElement = document.createElement("li");
newElement.textContent = "I'm a new element!";
list.insertBefore(newElement, list.children[1]);

// .insertAdjacentElement('beforebegin', element)-> Before it starts (previous sibling)
const beforeBegin = document.createElement("h2");
beforeBegin.textContent = "Before my sibling starts.";
list.insertAdjacentElement("beforebegin", beforeBegin);

// .insertAdjacentElement('afterbegin', element) -> After it starts (first child)
const afterBegin = document.createElement("li");
afterBegin.textContent = "After the first child starts.";
list.insertAdjacentElement("afterbegin", afterBegin);

// .insertAdjacentElement('beforeend', element) -> before it ends (last child)
const beforeEnd = document.createElement("li");
beforeEnd.textContent = "Before last child ends.";
list.insertAdjacentElement("beforeend", beforeEnd);

// .insertAdjacentElement('afterend', element) -> After it ends (next sibling)
const afterEnd = document.createElement("h2");
afterEnd.textContent = "After last child ends.";
list.insertAdjacentElement("afterend", afterEnd);

// .insertAdjacentHTML('position', 'HTML Element') -> Insert HTMl in the indicated position.
list.insertAdjacentHTML("beforeend", "<li>HTML insert </li>");

// .insertAdjacentText('position', 'Raw text') -> Insert raw text in the indicated position.
list.insertAdjacentText("beforeend", "Raw text insert");

/*
█▀▄ █▀█ █▀▄▀█   █▀▄▀█ ▄▀█ █▄░█ █ █▀█ █░█ █░░ ▄▀█ ▀█▀ █ █▀█ █▄░█   █▀▀ █▀█ █▄░█ █░█ █▀▀ █▄░█ █ █▀▀ █▄░█ █▀▀ █▀▀
█▄▀ █▄█ █░▀░█   █░▀░█ █▀█ █░▀█ █ █▀▀ █▄█ █▄▄ █▀█ ░█░ █ █▄█ █░▀█   █▄▄ █▄█ █░▀█ ▀▄▀ ██▄ █░▀█ █ ██▄ █░▀█ █▄▄ ██▄

█▀▄▀█ █▀▀ ▀█▀ █░█ █▀█ █▀▄ █▀
█░▀░█ ██▄ ░█░ █▀█ █▄█ █▄▀ ▄█ 

https://caniuse.com/#search=jQuery-like
*/

//.replaceChild(element, referenceElement) -> Replace one child with another.
const anotherElement = document.createElement("li");
anotherElement.textContent = "I'm another element!";
list.replaceChild(anotherElement, newElement);

// .before(element) -> Before it starts (previous sibling).
const newBegin = document.createElement("h2");
newBegin.textContent = "I'm the new begin";
list.before(newBegin);

// .prepend(element) -> After it starts (first child).
const newAfterBegin = document.createElement("li");
newAfterBegin.textContent = "I'm the new afterbegin";
list.prepend(newAfterBegin);

// .append(element) -> Before it ends (last child).
const newBeforeEnd = document.createElement("li");
newBeforeEnd.textContent = "I'm the new beforeend";
list.append(newBeforeEnd);

// .after(element) -> After it ends (next sibling).
const newAfter = document.createElement("h2");
newAfter.textContent = "I'm the new after!";
list.after(newAfter);

// oldElement.replaceWith(newElement) -> Replace the element with a new one.
const domNewReplace = document.createElement("li");
domNewReplace.textContent = "I'm the new replace!";
anotherElement.replaceWith(domNewReplace);

/*
█▀▀ █░░ █▀█ █▄░█ █▀▀   ▄▀█ █▄░█ █▀▄   █▀▄ █▀▀ █░░ █▀▀ ▀█▀ █▀▀
█▄▄ █▄▄ █▄█ █░▀█ ██▄   █▀█ █░▀█ █▄▀   █▄▀ ██▄ █▄▄ ██▄ ░█░ ██▄      
*/

// .cloneNode(true|false) - Clones the nodes. If true it will clone also the child nodes. Sending false won't do it.
console.log(list.cloneNode(true));
console.log(list.cloneNode(false));
list.after(list.cloneNode(true)); // insert cloned list

// .remove() - Deletes the DOM node.
title.remove();

// .removeChild(child) - Deletes the specified child in the DOM.
list.removeChild(list.children[0]);
