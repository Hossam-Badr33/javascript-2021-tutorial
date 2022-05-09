//create 100 div with h3 and p inside with DOM
for (let i = 1; i <= 100; i++) {
  let myD = document.createElement("div");
  let myH = document.createElement("h3");
  let myP = document.createElement("p");
  let myText = document.createTextNode("product title" + [i]);
  let myT = document.createTextNode("paragraph discreption" + [i]);
  myD.className = "prudoct";
  myH.appendChild(myText);
  myP.appendChild(myT);
  myD.appendChild(myH);
  myD.appendChild(myP);
  document.body.appendChild(myD);
}
