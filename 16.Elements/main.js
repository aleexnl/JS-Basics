//DOM - Crear e insertar elementos

/* 
Add element to DOM: 
*/

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const selectDays = document.getElementById("daysSelect");
// document.createDocumentFragment() -> Create a document with code, stored in a variable.
const fragment = document.createDocumentFragment();
const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// element.innerHTML = 'HTML code' -> Add text with HTML.
title.innerHTML = "DOM: <span>Insert & Create HTML Elements</span>";

// Loop to insert all weekdays in the "ul" tag.
for (const day of weekDays) {
  // document.createElement(element) -> Create a HTML element
  const element = document.createElement("li");
  element.textContent = day;
  // parent.appendChild(element) -> Append element as a child.
  fragment.appendChild(element);
}
daysList.appendChild(fragment); // Add fragment code to the "ul" element

// Loop to insert all weekdays in the "select" tag.
for (const day of weekDays) {
  const selectItem = document.createElement("OPTION");
  selectItem.setAttribute("value", day.toLowerCase());
  selectItem.textContent = day;
  fragment.appendChild(selectItem);
}
selectDays.appendChild(fragment); // Add fragment code to the "select" element
