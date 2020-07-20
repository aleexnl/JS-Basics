<p  align="center">
    <img src="../assets/img/icon.jpg"/>
</p>
<h2 align="center"><strong>NEWBIE JAVASCRIPT CHEAT SHEETS</strong></h2>

# Events with JavaScript & DOM

## 1. Introduction

JavaScript events are things that happen inside our document; covering clicks, move the mouse, read content, close window, etc. We can put this events embed in the HTML, but for major reasons we need to use `.addEventListener("event", callback)`

```js
element.addEventListener("click", greet());
```

> **Note:** In Angular and other frameworks orientated to component development this is not needed, since they have their particular syntax.
