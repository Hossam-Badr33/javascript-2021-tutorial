var basic1 = 20; //global var
let overTime1 = 30; //global var

var basic2 = 20; //global var
let overTime2 = 30; //global var

let emp1Salary = (_) => `emp1 ${basic1 + overTime1}`;
console.log(emp1Salary());

let emp2Salary = function () {
  let basic2 = 40; //local var if not exist will search in global
  var overTime2 = 50; //local var if not exist will search in global
  return `emp2 ${basic2 + overTime2}`;
};
console.log(emp2Salary());

console.log(`${basic2 + overTime2}`); //can't assign local var from global section
