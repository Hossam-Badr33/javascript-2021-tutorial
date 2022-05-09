let div1 = document.getElementsByClassName("div1")[0],
  div2 = document.getElementsByTagName("div")[1];
console.log(div1.innerHTML); //give inner=> read tags
console.log(div1.textContent); //only text string no read tags

div2.innerHTML = "<p>this paragraph from js</p>";
console.log(div2.innerHTML);
console.log(div2.textContent);
div2.innerHTML = "&lt;a href='www.google.com'&gt;Google&lt;a/&gt;";
console.log(div2.innerHTML);
console.log(div2.textContent);
div2.innerHTML = "<a href='www.google.com'>Google<a/>";
console.log(document.querySelector("a").getAttribute("href"));
//getAttribute method
document.querySelector("a").setAttribute("href", "www.twitter.com");
//setAttribute method
console.log(document.querySelector("a"));
document.querySelector("a").alt = "twitter";
document.images[0].src =
  "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445"; //set attribute by normal way
document.images[0].alt = "photo";
