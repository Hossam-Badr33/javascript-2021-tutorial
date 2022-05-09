let div = document.getElementById("div"),
  img = document.querySelector("img"),
  anchor = document.getElementsByTagName("a")[0],
  section = document.getElementsByTagName("section")[0];

console.log(div.attributes);//give u all attributes of element object
console.log(anchor.attributes);
anchor.href = "www.google.com";
console.log(anchor.href);
anchor.target = "_blank";
console.log(anchor.attributes);
//if u want to get list of all existing attributes(names or values) of any element
var attrNames = "",
 attrValues = "",
 an = anchor.attributes.length;
for (i= an -1; i>=0; i--) {
    attrNames += anchor.attributes[i].name;
    attrValues += anchor.attributes[i].value;
}
console.log(attrNames);
console.log(attrValues);
 // element.hasAttribute("attr_name")--> bool
if (img.hasAttribute("src")) {
    img.src = "https://cdn.britannica.com/39/7139-050-A88818BB/Himalayan-chocolate-point.jpg"
}else{
    console.log(`not found`);
}
if (img.src.value === "") {
    console.log("no value");
}else{
    console.log("value exist");
}
//element.hasAtributes() ---> bool
function addAttribute () {
    if (section.hasAttributes()){
        console.log("yes has attributes");
    }
    else{
        section.setAttribute("class", "section1");
    }
}
addAttribute ()
function removeAttr () {
    if (section.hasAttribute("class")) {
        section.removeAttribute("class");
    }
}
removeAttr ();