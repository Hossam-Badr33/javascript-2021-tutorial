/*1-  ---.style.---- = "";
        tag.style.propertyCamelCase = "value" 
  2-  ---style.cssText = ""
        tag.style.cssText = "propert: value"
  3- document.styleSheets[index].cssRules[index].style.setProperty("propertyName", "Value", "important"[opt])
  or
  document.styleSheets[index].cssRules[index].styleremoveProperty("propertyName")
*/
let div = document.getElementsByTagName("div")[0];

div.style.cssText = "margin-top:50px;";
div.style.fontSize = "30px";
div.style.color = "#BBCC33";
console.log(document.styleSheets);
document.styleSheets[0].cssRules[0].style.setProperty(
  "text-align",
  "left",
  "important"
);
document.styleSheets[0].cssRules[0].style.removeProperty("text-decoration");
