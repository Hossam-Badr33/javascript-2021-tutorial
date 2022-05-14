/*
Array.from(iterable, MapFunc[opt], this[opt this=> array]);
 */
let arrayFrom = Array.from([1, 2, 3, 4, 6]);
console.log(arrayFrom);
let arrayFrom1 = Array.from([
  [{ key: "hossam" }, "ob"],
  [[1, 3], "numbers"],
  [true, false],
  "Boolyen",
]);
console.log(arrayFrom1);
let name = "hossam"; //this string iterable
console.log(Array.from(name));
let numbers = "258765"; //note 258765 not iterable
console.log(
  Array.from(numbers, function (num) {
    return +num + +num;
  })
);
let arr = ["hossam", "Badr"];
console.log(
  Array.from(arr, function (arguments) {
    console.log(arguments);
    return Array.from(arguments);
  })
); //will return nested array
function testArguments() {
  newArr = Array.from(arguments);
  console.log(arguments);
  return newArr;
}
console.log(testArguments("hossam", "hassan", "sayed")); //will give array ['hossam', 'hassan', 'sayed']
// to return only unique values in array
let arr1 = [1, 1, 1, 2, 3, 4, 4];
console.log(Array.from(new Set(arr1)));
console.log(Array.from([...new Set(arr1)])); // result an array with unique values
