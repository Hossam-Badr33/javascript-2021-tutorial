/*
A-nextSibling         --> give u next-brother(node/element) of that tag
B-previousSibling     --> give u previous-brother(node/element) of that tag
C-nextElementSiblin   --> give u next-brother(only-element) of that tag
D-prevoiusElementSibling --> give u previous-brother(only-element) of that tag
E-parentSibling       --> give u parent of that tag
 */
span = document.getElementsByTagName("span");
span[0].nextSibling.after("hi from span-1");
span[1].previousSibling.before("hi from span-2");
span[2].previousElementSibling.after(document.createElement("a"));
let a = document.querySelector("a");
a.href = "";
a.innerHTML = "Google";
console.log(span[2].parentElement);
