//window.localStorage.clear();
//window.sessionStorage.clear();
let inputText = document.querySelector(".task-name"),
  submit = document.querySelector(".add"),
  task = document.getElementById("first"),
  btn = document.getElementsByTagName("button"),
  p = document.querySelector("p");

let x = 0;
submit.addEventListener("click", function (e) {
  x++;
  if (inputText.value.length < 5) {
    e.preventDefault();
  } else {
    function printTask() {
      window.localStorage.setItem(`task${x}`, `${inputText.value}`);
    }
    printTask();
    console.log(x);
    p.innerHTML = x;
    let clone = task.cloneNode(true);
    clone.removeAttribute("id");
    task.after(clone);
    clone.style.display = "block";
  }
});
// if (window.localStorage !== null) {
// }
window.addEventListener("click", function (e) {
  if (e.target.tagName === "button") {
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.display = "none";
    }
  }
});
