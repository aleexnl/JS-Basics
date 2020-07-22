const form = document.getElementById("form");
const input = document.getElementById("input");
const button = document.getElementById("button");
const link = document.getElementById("link");
const gallery = document.getElementById("gallery");

// We can use event object to work with the event information.
button.addEventListener("click", (event) => {
  console.log(event.target); // Event target information.
});

/* Add event listener to the parent component and localize the focus with target. */
gallery.addEventListener("click", (event) => {
  event.target.classList.add("red"); // Add css class
});

link.addEventListener("click", (event) => {
  event.preventDefault(); // Evade default operations.
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evade default operations.
  console.log("Form has been sended correctly.");
});

button.addEventListener("click", () => {
  input.value = "Click!"; // Change input value.
});
