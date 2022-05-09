/* 1- for mouse / cursor:
        a- onclick
        b- oncontextmenu
        c- onmouseenter
        d-onmouseleave
    2- for window:
        a- onload
        b- onscroll
        c- onresize
    3-for form
        a-onfocus
        b-onblur
        c-onsubmit
 */
let button = document.getElementById("btn"),
 p = document.querySelector("p");
button.onclick = () => p.innerHTML = "hey";
window.onscroll = () => console.log("scrolled");