let string = "elzero web school",
  string2 = "elzero|web|school";
console.log(string.indexOf("web")); //7
console.log(string.indexOf("o")); //5
console.log(string.indexOf("o", 8)); //14
console.log(string.lastIndexOf("o")); //15
console.log(string.lastIndexOf("o", 13)); //5
console.log(string.lastIndexOf("o", 16)); //15
console.log(string.slice(0)); //elzero web school
console.log(string.slice(7, 10)); //web
console.log(string.slice(-7)); //school
console.log(string.split()); //array["elzero web school"]
console.log(string.split(" ")); //array["elzero", "web", "school"]
console.log(string.split("")); //array["e","l","z","e","r","o"," ","w","e","b",.....]
console.log(string.split("", 6)); //array[ "e", "l", "z", "e", "r", "o" ]
console.log(string2.split("|")); //array["elzero", "web", "school"]
console.log(string.repeat(3)); //ES6 string.repeat(times)--->elzero web schoolelzero web schoolelzero web school