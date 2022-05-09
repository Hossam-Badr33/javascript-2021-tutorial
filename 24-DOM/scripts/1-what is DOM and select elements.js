let ID = document.getElementById("paragraph"),
  className = document.getElementsByClassName("divs"),
  tagName = document.getElementsByTagName("span"),
  query = document.querySelector("#name"),
  queryAll = document.querySelectorAll("form");

console.log(ID.innerHTML);
console.log(typeof className[0].innerHTML);
tagName[1].style.color = "red";
query.style.transition = "all .7s ease-in-out";
query.addEventListener("mouseenter", function (e) {
    e.target.style.fontSize = "30px";
  //document.querySelector("h2").style.fontSize = "30";
});
queryAll[0][1].name = "data1";
console.log(queryAll[0][1].name);