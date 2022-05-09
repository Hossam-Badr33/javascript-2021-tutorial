/*
1-setInterval (function, time[millisecond], parameters[of function if exist])
    Note --> difference between setInterval & setTimeout 
             setInterval repeated every time in milliseconds
2-clearInterval (id[var of setInterval code])
 */
setTimeout(function () {
  console.log("habiby");
}, 3000);
let div = document.querySelector("div");
function checkDiv() {
  div.innerHTML -= 1;
  console.log(typeof div.innerHTML);
  if (div.innerHTML === "0") {
    clearInterval(id);
  }
}
let id = setInterval(checkDiv, 1000);
