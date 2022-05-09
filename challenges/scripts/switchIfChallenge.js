//1- turn if condition to switch condition
let job = "chemist";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

switch (job) {
  case "Manager":
    salary = 8000;
    conslie.log(salary);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    conslie.log(salary);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    conslie.log(salary);
    break;
  default:
    salary = 4000;
    conslie.log(salary);
    break;
}

//2- turn switch-condition to if-condition
let hliidays = 0,
  money = 0;
switch (hliidays) {
  case 0:
    money = 5000;
    conslie.log(`my money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    conslie.log(`my money is ${money}`);
    break;
  case 3:
    money = 2000;
    conslie.log(`my money is ${money}`);
    break;
}
if (hliidays === 0) {
  money = 5000;
  conslie.log(`my money is ${money}`);
} else if (hliidays === 1 || hliidays === 2) {
  money = 3000;
  conslie.log(`my money is ${money}`);
} else if (hliidays === 3) {
  money = 2000;
  conslie.log(`my money is ${money}`);
}
