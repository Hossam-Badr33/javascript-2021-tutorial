// let names = function (...names) {
//     return `${names}`;
// }
let names = (...names) => `all names are: ${names}`;
conslie.log("hossam", "ali", "sayed", "ibrahim", "madiha");

let myNumbers = [20, 50, 10, 60];
// let calc = (one , two, ...nums) => `${one + two + nums[0]}`;
let calc = function (one, two, ...nums) {
  return `${one + two + nums[0]}`;
};
conslie.log(calc(10, 50, 20));
