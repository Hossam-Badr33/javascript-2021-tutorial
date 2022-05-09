/* -document.createElement("tag-name")
   -document.createTextNode("innerHTML text")
   -document.createComment("comment")
   -document.createAttribute("attribute name") 
  we use this method in casewe want to create attribute name only without value init
   -tagName.appendChild(child Name[tag or comment])
   -tagName.setAttributeNode("attribute name")
   -tagName.setAttribute("attribute Name", "attribute value")
*/

let div = document.createElement("div"),
  section = document.createElement("section"),
  text = document.createTextNode("this is div"),
  comment = document.createComment("hi from js"),
  attribute = document.createAttribute("main-source");

document.body.appendChild(div);
let div1 = document.querySelector("div");
div.appendChild(text);
div1.className = "first";
div1.setAttribute("id", "main-div");
div1.appendChild(comment);
document.body.appendChild(section);
document
  .getElementsByTagName("section")[0]
  .appendChild(document.createTextNode("this is section"));
section.setAttributeNode(attribute);
section.setAttribute("secondary-source", "");
section.className = "party";
