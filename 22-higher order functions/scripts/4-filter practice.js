//1-filter words more than 4 characters
let sentence = "I Love Foood Code Too Playing Much";

let charFour = sentence
  .split(" ")
  .filter((ele) => ele.length <= 4)
  .join(" ");
console.log(charFour);

//2- filter strings + multiply numbers
// we use her filter + map
let mix = "A13BS2Z8X";
let numbersOnly = mix
  .split("")
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => ele * ele)
  .join("");
console.log(numbersOnly);
