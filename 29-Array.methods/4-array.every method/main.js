/*
Definition and Usage
The every() method executes a function for each array element.

The every() method returns true if the function returns true for all elements.

The every() method returns false if the function returns false for one element.

The every() method does not execute the function for empty elements.

The every() method does not change the original array

Syntax
array.every(function(currentValue, index[opt], arr[opt]), thisValue[opt])
 */
let arr = [5, 10, 10, 16, 20];
console.log(arr.every((num) => num < 100));
console.log(arr.every((num) => num > 5));
let ob = {
  min: 50,
  max: 100,
};
console.log(
  arr.every(function (e) {
    return e < this.min;
  }, ob)
);
let locations = {
  20: "Place 1",
  30: "Place 2",
  15: "Place 3",
  40: "Place 4",
};
let mainLocation = 15;
let locationsArray = Object.keys(locations).map((e) => +e); //convert to array of numbers
console.log(locationsArray);
console.log(
  locationsArray.every(function (e) {
    console.log(this);
    return e >= this;
  }, mainLocation)
);
