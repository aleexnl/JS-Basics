const button = document.getElementById("button");

button.addEventListener("click", () => {
  console.log("Hello!"); // We define a callback for the event
});

button.addEventListener("dblclick", () => {
  console.log("Not that fast!");
});
