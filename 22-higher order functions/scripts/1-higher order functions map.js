let arr = [1, 2, 3, 4, 5, 6],
  newArr = [];
function addFunction() {
  for (i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + arr[i]);
  }
  console.log(newArr);
}
addFunction(); //if u want to get each element of array + it's vlue

/*u can use map in case u wan new array because old one not affected
oldArray.map(callBackFunction (number, index, array),number) */
var plus = (x) => x + x;
var mapArr = arr.map(plus, arr[0], arr);
console.log(mapArr);

function add(y) {
  return y + y;
}
console.log(arr.map(add)); //same result
console.log(arr); //riginal array not affected

var norMapEx = arr.map(function (element, index, arr) {
  console.log(`${element} + ${index} + ${arr}`);
}, 10);
var normalMapArr = arr.map(function (element) {
  return element + element;
});
console.log(normalMapArr); //same result
let mapArrow = arr.map((element) => element + element);
console.log(mapArrow); //same result arrow function
