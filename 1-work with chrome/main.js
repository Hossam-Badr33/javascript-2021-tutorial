var h1 = document.getElementById("head");
window.onload = function () {
  h1.style.fontsize = "50px";
  h1.style.color = "red";
};
console.log("hey");
console.log(h1.tagName);
h1.innerHTML = "hi from javascript";
document.getElementsByTagName("p")[0].style.backgroundColor = "#3388EE";
console.log("hossam");
console.log("not saved");
// window.alert("hey you annoying me");
document.write(
  "<abel for='fname'>first-name</label> <input type='text' id='fname' name='fname' placeholder='type your first name'/>"
);
var input = document.getElementById("fname");
input.onkeypress = function () {
  input.style.backgroundColor = "yellow";
  input.style.textAlign = "center";
  input.style.fontWeight = "bold";
};
input.addEventListener("mouseover", () => {
  input.style.height = "50px";
});
input.addEventListener("mouseleave", () => {
  input.style.height ="auto";
});
