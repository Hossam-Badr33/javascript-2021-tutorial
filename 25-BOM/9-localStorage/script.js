console.log(window.localStorage); //object & length of object
//set key+value
window.localStorage.color = "#FF0000"; //1- ob.keyName = "keyValue"
window.localStorage["fontSize"] = "30px"; //2- ob["key-Name"] = "keyValue"
window.localStorage.setItem("border", "3px solid yellow"); //3- ob.setItem("keyName", "keyValue")
//get value
document.body.style.backgroundColor = window.localStorage.color; //1- ob.keyName
document.write("<p>Hello World</p>");
let p = document.querySelector("p");
p.style.fontSize = window.localStorage["fontSize"]; //2- ob["key-Name"]
console.log(window.localStorage.getItem("border")); //3- ob.getItem("keyName")
//get key
console.log(window.localStorage.key(0)); //1-  ob_name.key(index of key)
console.log(Object.keys(window.localStorage)[1]); //2-  Object.keys(ob_name[index of key])
console.log(window.localStorage.length);
//remove => only remove  key
window.localStorage["line-height"] = "10px";
console.log(window.localStorage.key(1)); //check before remove
window.localStorage.removeItem("line-height"); //remove line-height after set key+value
console.log(window.localStorage.key(1)); //check after remove
//clear ()  => this code clear all localStorage keys + values
//window.localStorage.clear()

/*
    notes:
        A-if u use private -tab localStorsge will removed after closing tab
        B-http is differ from https with localStorage
        C-No expiration time for localStorage but u can set expiration
 */
