/*
destructuring:   
  js property allow you to extract data from (arrays, objects, maps) and set them into new distinct variables
 */
//1-array:
let arr = ["hossam", "soft", ["badr"], 38];
let [x, y, z, num] = arr;
console.log(x);
console.log(y);
console.log(z);
console.log(num);
//if u already have these variables declared just wtite without let declare
let item1 = 1;
let item2 = 2;
let item3 = 3;
let item4 = 4;
console.log("old => " + item1 + "/" + item2 + "/" + item3 + "/" + item4);
[item1, item2, item3, item4] = arr;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(item4);
//if u wanna to destruct only certian values in array
let [name, , family] = arr;
console.log("only item 1,3 will printed");
console.log(name);
console.log(family);
let myFriends = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["shady", "Amr", ["Mohamed", "Gamal"]],
];
//nested array
let [, , , [a, , [, b]]] = myFriends;
console.log(a); //Shady
console.log(b); //Gamal
//swapping variables
let book = "Video";
let video = "Book";
[book, video] = ["Book", "Video"];
console.log(book); //Book
console.log(video); //Video
