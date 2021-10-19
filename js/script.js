"use strict";

const newText = document.querySelector(".new_element");
const newElement = document.createElement("div");
newElement.innerHTML = "I must, I gonna to work";

newText.after(newElement);
