//main header container footer
let header = document.createElement("header"),
  container = document.createElement("section"),
  footer = document.createElement("footer");
//rest of elements
let p = document.createElement("p"),
  ul = document.createElement("ul"),
  h2 = document.createElement("h2"),
  div2 = document.createElement("div");
//body global
document.body.style.cssText = "margin: 0;background-color:lightGrey;";
//header
document.body.appendChild(header).appendChild(h2);
header.classList.add("main");
h2.innerHTML = "Elzero";
header.append(ul);
for (i = 0; i < 4; i++) {
  //text
  let p = document.createElement("p"),
    li = document.createElement("li"),
    text = document.createTextNode([i]);
  li.append(text);
  ul.append(li);
}
ul.children[0].innerHTML = "Home";
ul.children[1].innerHTML = "About";
ul.children[2].innerHTML = "Service";
ul.children[3].innerHTML = "Contact";
//header style
header.style.cssText = "display:flex;background-color: white;";
h2.style.cssText =
  "color:rgba(40, 80, 100, .7); font-size:30px;width:20%;float:left;";
ul.style.cssText =
  "float: right;line-height:30px;width:80%;margin-right: 10px;text-align: right;";
for (i = 0; i < ul.children.length; i++) {
  ul.children[i].style.cssText =
    "display:inline; padding:10px; color:blue;font-size:20px";
}

//container
header.after(container);
for (i = 1; i < 16; i++) {
  let h3 = document.createElement("h3"),
    div = document.createElement("div"),
    text = document.createTextNode(`${[i]}`),
    span = document.createElement("span");
  div.appendChild(h3);
  h3.appendChild(text);
  span.append("Product");
  h3.after(span);
  container.appendChild(div);
}
//container-style
container.style.cssText =
  "margin-top:10px;grid-template-columns:repeat(5, 1fr);grid-tempalte-rows:repeat(2, 1fr);column-gap:5px;row-gap:5px;";
container.style.display = "grid";
container.style.height = "400px";
for (let i = 0; i < container.children.length; i++) {
  container.children[i].style.cssText =
    "border:2px #000 solid;background-color:#FFF;border-radius:20px;padding:5px;";
  container.children[i].firstElementChild.style.cssText = "text-align: center;";
  container.children[i].lastElementChild.style.cssText =
    "display: block;text-align: center;";
}
//footer
document.body.appendChild(footer);
footer.append(div2);
div2.append(p);
p.append("copyright 2022");
//footer style
footer.style.cssText = "position: relative;top: 114px;";
p.style.cssText = "background-color: aqua;text-align: center;padding-top:15px;";
