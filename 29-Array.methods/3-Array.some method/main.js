/* 
The some() method checks if any array elements pass a test (provided as a function).
if provided condition exist return true & stop if not return false.
The some() method executes the function once for each array element:

If the function returns true, some() returns true and stops.
If the function returns false, some() returns false and stops.
The some() method does not execute the function for empty array elements.

The some() method does not change the original array.

Syntax
array.some(function(value, index[opt], arr[opt]), this[opt])
*/
let arr = [2, 3, 5, 88, 70, 90, 15, 25, "hossam"];
console.log(arr.some((e) => e === "hossam")); //true
console.log(arr.some((e) => e === "badr")); //false
console.log(
  arr.some(function (num) {
    console.log(num);
    return num > 5; //will stop at 88 condition true
  })
);
function checkNumber(array, num) {
  return array.some(function (e) {
    return e === num;
  });
}
console.log(checkNumber(arr, 100)); //false
console.log(checkNumber(arr, 70)); //true

let range = {
  min: 10,
  max: 20,
};
function checkNoInRange(array) {
  return array.some(function (e) {
    console.log("******" + e);
    return e < this.max && e > this.min;
  }, range); //range => this
}
console.log(checkNoInRange(arr));
