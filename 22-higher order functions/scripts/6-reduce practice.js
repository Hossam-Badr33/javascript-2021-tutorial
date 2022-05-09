let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Hossm Badr Elkebeer",
];
// get biggest word in array
let biggestWord = theBiggest.reduce((acc, curr) =>
  curr.length > acc.length ? curr : acc
);
console.log(biggestWord);
// remove un-desired characters from array "@" and get string "ELZERO" without using join method
let removeChar = ["E", "@", "L", "Z", "@", "@", "E", "@", "R", "O"];
let zeroStr = removeChar
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce((acc, curr) => acc + curr);
console.log(zeroStr + " " + typeof zeroStr);
