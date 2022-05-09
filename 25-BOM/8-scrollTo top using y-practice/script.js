/*
scrollX === alias => pageXOffset
scrollY === alias => pageYOffset
 */
document.body.style.cssText = "height:3000px";
let btn = document.querySelector(".up");
window.onscroll = function () {
  console.log(window.scrollY);
  if (window.pageYOffset /*==window.scrollY*/ >= 600) {
    btn.style = "display: block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};
