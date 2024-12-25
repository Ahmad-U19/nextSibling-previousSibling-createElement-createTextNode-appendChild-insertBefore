var element;

element = document.getElementById("content").nextSibling;

console.log(element);

element = document.getElementById("content").nextElementSibling;

console.log(element);

element = document.getElementById("content").previousSibling;

console.log(element);

element = document.getElementById("content").previousElementSibling;

console.log(element);

var newElement;

newElement=document.createElement("h2");

//console.log(newElement);

var newTextNode=document.createTextNode("This is Ahmad Uppal");

console.log(newTextNode);

var newComment;

newComment=document.createComment("THis is a Comment");

console.log(newComment);

newElement.appendChild(newTextNode);

console.log(newElement);

document.getElementById("content").appendChild(newElement);

var element12=document.getElementById("content");

element12.insertBefore(newElement,element12.childNodes[2]);