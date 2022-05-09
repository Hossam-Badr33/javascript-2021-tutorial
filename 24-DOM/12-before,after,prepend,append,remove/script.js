/*
A-tag.before(element || text)  --> add element || text before tag
B-tag.after(element || text)   --> add element || text after tag
C-tag.append(element || text)  --> add element || text at end of tag
D-tag.prepend(element || text) --> add element || text at start of tag
F-tag.remove()                 --> remove tag entirely even in inspect-page so user can't change it.
 */
let div = document.getElementById("first"),
  p = document.createElement("p"),
  textH3_1 = document.createTextNode("hi1"),
  textH3_2 = document.createTextNode("hi2"),
  h3 = document.createElement("h3");

div.before("this line from js before");
div.after("this line from js after");

let pSpan = div.firstElementChild.appendChild(p);
pSpan.innerHTML = "pragraph from after-span";
div.before(p);
div.after(h3);
div.appendChild(document.createElement("p"));

h3.remove();
