/*
setTimeout (function, time[millisecond], parameters[for function])
clearTimeout (id[var of setTimeout code])
 */
setTimeout(function () {
  console.log("hi hossam");
}, 5000);
function sayHello(name, message) {
  console.log("hello baby" + " " + name + " " + message);
}
let id = setTimeout(sayHello, 6000, "hossam", "what do you want");
let button = document.getElementsByTagName("button")[0];
button.onclick = function () {
  clearTimeout(4);
  console.log("clicked");
};
console.log(id);
