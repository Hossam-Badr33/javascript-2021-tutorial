var string = "elzero web school";
console.log(string.substring(0)); //string.substring(start[index], end[index])--->elzero web school
console.log(string.substring(0, 6)); //elzero
console.log(string.slice(0, 6)); //elzero
console.log(string.substring(-7, -1)); //negative value = 0-index-->empty string
console.log(string.substring(-7, 6)); // == substring(0, 6)
console.log(string.slice(-7, -1)); //schoo
console.log(string.substring(2, 6)); //zero
console.log(string.slice(2, 6)); //zero
console.log(string.substring(6, 2)); //zero u can exchange with substring it will understand
console.log(string.slice(6, 2)); //empty string  u can't exchange in slice
console.log(string.substring(string.length - 3, string.length));
console.log(string.slice(string.length - 3, string.length));
console.log(string.substr(7, 3)); //string.substr(index, length) note it accept negative-values
console.log(string.substr(-5, 2));
console.log(string.includes("web")); //true or false     string.includes(string, number)
console.log(string.includes("web", 9));
console.log(string.includes("elzero", -1));
console.log(string.startsWith("web")); //true or false  string.startsWith(string, number)
console.log(string.startsWith("web", 7));
console.log(string.endsWith("l")); //true or false       string.endsWith(string, number)
//note:if u don't determine number it will check last number of string 17==index16 and check for "l"
console.log(string.endsWith("school", 17));
console.log(string.endsWith("o", 6));
