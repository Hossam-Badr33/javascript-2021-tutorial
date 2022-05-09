//window.localStorage.clear();
let lists = document.querySelectorAll("ul li"),
  div = document.querySelector(".screen");

if (window.localStorage.length !== 0) {
  /*if there is color in localStorage:
  1-add color to div [.screen]
*/
  div.style.backgroundColor = localStorage.color;
  lists.forEach((li) => {
    /*
    2-remove class acive from other li
  */
    li.classList.remove("active");
  });
  //3-add active class to current color
  document
    .querySelector(`[data-color="${window.localStorage.color}"]`)
    .classList.add("active");
} else {
  console.log("No");
}
lists.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e);
    lists.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    div.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
console.log(lists[0].dataset.color);
