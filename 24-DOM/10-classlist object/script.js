/*  tag.classList.length;
    tag.classList.contains("className") ---> boolean
    tag.classList.add("className1", "className2",..)
    tag.classList.remove("className1", "className2",..)
    tag.classList.toggle("className"); --> if exist remove if not exist add it
*/
let div1 = document.querySelector(".first"),
  div2 = document.querySelector(".second");

console.log(`${div1.innerHTML} ${div2.innerHTML}`);
console.log(`${div1.classList.length}`);
if (div1.classList.contains("hossam")) {
  console.log("yes hossam here");
}
div2.onmouseenter = function () {
  div2.classList.add("real", "magic");
  div1.classList.add("real", "magic");
  div1.classList.remove("magic");
  div1.classList.toggle("add-remove");
};
console.log(div2.classList.item("0"));
