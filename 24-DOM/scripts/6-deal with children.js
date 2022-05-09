/*  tag.children --> give u all elements only
  tag.childNodes --> give u all nodes [elements, comments, text(space)]
  tag.firstChild --> first node [elements, comments, text(space)]
  tag.lastChild  --> last node [elements, comments, text(space)]
  tag.firstElementChild --> first element
  tag.lastElementChild  --> last element
*/
function createTags() {
  for (let i = 1; i < 4; i++) {
    let div = document.createElement("div"),
      p = document.createElement("p"),
      span = document.createElement("span"),
      comment = document.createComment("hi from js"),
      pText = document.createTextNode(`paragraph no ${i}`),
      spanText = document.createTextNode(`span text no ${i}`);

    document.body.appendChild(div);
    div.className = `main ${i}`;
    p.appendChild(pText);
    div.appendChild(p);
    span.appendChild(spanText);
    div.appendChild(span);
    div.appendChild(comment);
  }
}
createTags();
let myDiv = document.getElementsByTagName("div"),
  myP = document.getElementsByTagName("p"),
  mySpan = document.querySelectorAll("span");
console.log(myDiv[0].children);
console.log(myDiv[0].childNodes);
console.log(myDiv[1].lastChild);
console.log(myDiv[1].lastElementChild);

console.log(document.body.children);
console.log(document.body.childNodes);
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
