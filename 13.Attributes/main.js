const title = document.getElementById("title");
const name = document.getElementById("username");
const password = document.getElementById("password");

// element.getAttribute("attribute"); -> Get the value assigned to the attribute in the node.
console.log(`Value of text attribute in title: ${name.getAttribute("type")}`);

// element.setAttribute('attribute', value) -> Change the value of the selected attribute in the node
password.setAttribute("type", "text");

// element.classList.add('class','class',...) -> Add a class to the node. We can add as many as we want.
title.classList.add("main-title", "other-title");

// element.classList.remove('class','class',...) -> Remove a class to the node. We can delete as many as we want.
title.classList.remove("title"); // removes title class

// element.classList.toggle('class'[,force]) -> if it has the class, it removes it. If it does not have the class, it adds it to the node.
title.classList.toggle("title");

// element.classList.contains('class') -> returns true or false depending if it contains the specified class.
console.log(`Does title has class title? ${title.classList.contains("title")}`);
title.classList.remove("title");
console.log(`Does title has class title? ${title.classList.contains("title")}`);

// element.classList.replace('oldClass','newClass') -> Replace a class for another.
title.classList.replace("other-title", "page-title");
