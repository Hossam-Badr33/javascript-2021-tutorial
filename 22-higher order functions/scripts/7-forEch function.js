let list = document.querySelectorAll("ul li");
let divs = document.querySelectorAll("div");
list.forEach(function (li) {
  li.onclick = function () {
    list.forEach(function (li) {
      li.classList.remove("active");
    });
    this.classList.add("active");
    divs.forEach(function (div) {
      div.style.display = "none";
    });
  };
});
/*forEach(callbackfunction (element, index, arr), this) 
 element: current element being processed
 index: index of currret element being processed
 arr: original array
note -----> doesn't return anything [undefined]
     -----> break: will not break loop*/
