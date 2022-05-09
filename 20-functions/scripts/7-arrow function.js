// u can use arrow function if function conatain 1-line code

function sayHello() {
  let message = "Hello"; //2-line codes u can't use arrow function
  return `${message}`;
}

// original function
//function sayDate () { // here u can use arrow function
//     return `${new Date().toDateString()}`;
// }

let hiDate = (_) => `${new Date().toDateString()}`;
console.log(hiDate());
// in arrow:
// 1-u can write function without word-function
// 2- if 1-argument u can remove () and put _ but if 2-arguments u have to put ()
// 3- u can remove return and {}
let calculate = (num1, num2) => `result ${num1 + num2}`;
console.log(calculate(25, 25));
