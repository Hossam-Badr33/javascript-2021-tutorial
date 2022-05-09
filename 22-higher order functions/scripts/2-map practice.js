let swappingCases = "elZERo";
//make all letters upper with map then use arrow functions
let upper = swappingCases
  .split("")
  .map((ele) =>
    ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
  )
  .join("");
console.log(upper);

//convert negative numbers and positive numbers in invertedNumbers to opposite
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let negativePositive = invertedNumbers.map((ele) => ele * -1);
console.log(negativePositive);

let ignoreNumbers = "Elz123er4o";
let ignoreArr = [];
//1- soln normal without map:
//*************************/
let result1 = ignoreNumbers.split("");
console.log(result1);
for (i = 0; i < result1.length; i++) {
  if (isNaN(parseInt(result1[i])) === true) {
    console.log(`string ${result1[i]}`);
  } else {
    console.log(`number ${result1[i]}`);
    ignoreArr.push(result1[i]);
  }
}
console.log(ignoreArr);

//2- soln with map:
//************************************/
let result2 = ignoreNumbers
  .split("")
  .map((ele) => {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");
console.log(result2);

//3- same soln with arrow function:
//**************************************/
let result3 = ignoreNumbers
  .split("")
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .join("");
console.log(result3);
