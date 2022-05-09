/*
1-element.onclick/event = function one();
  element.onclick/event = function two();
    *note if same element will ovwerride and last-function will excuted
2-element.addEventListner("event", string) --> Error
  element.addEventListner("event", function/object)->work
    *note if same element all excuted no override
3-e.target ---> means tag which affected by event whatever who it is u can control/check/... it
 */
let div = document.body.children[0];
div.onclick = function () {
  let new_div = div.cloneNode(true);
  new_div.className = "cloned";
  document.body.appendChild(new_div);
  console.log("clicked");
  console.log(new_div);
};
window.addEventListener("click", function (e) {
  console.log(e.target); //VIP code to control tag
  if (e.target.classList.contains("cloned")) {
    e.target.style.backgroundColor = "red";
  }
});
