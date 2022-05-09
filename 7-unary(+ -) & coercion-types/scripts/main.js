let num1 = "10",
  num2 = 100,
  num3 = -50;

console.log(num1 + num2); //10100 string
console.log(+num1 + num2); //110 number
console.log(-num1 + num2); //90 number
console.log(-num1 + num3); //-60 number
console.log(+num1 + num2 + true); //111 number (true=1)
console.log(-num1 + num2 + false); //90 number(false=0)
console.log(num1 - num2); //-90 --->coercion convert num1(str to number)
console.log(num1 + num2 + true); ///10100true string
console.log("" + num2); //100 number ""=0
