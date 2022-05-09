function inform(name = "unknown", age = "unknown", rate = 0, ...skills) {
  document.write(`<div>`);
  document.write(`<h1>Name is: <span>${name}</span></h1>`);
  document.querySelector("span").style.fontSize = "25px";
  document.querySelector("span").style.fontStyle = "italic";
  document.write(`<h4>Age is: ${age} years old.</h4>`);
  document.write(`<h4>rating &lt;-${rate}-&gt;</h4>`);
  if (skills.length === 0) {
    document.write(`<h3>your skills are: no-scales</h3>`);
  } else {
    document.write(`<h3>your skills are:</h3>`);
    for (i = 0; i < skills.length; i++) {
      document.write(`<p>${skills[i]}</p>`);
    }
    document.write(`</div>`);
  }
}
inform("hossam", 38, 3, "reading", "programming");
