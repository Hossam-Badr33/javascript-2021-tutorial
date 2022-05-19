class Worker {
  constructor(name, age, salary) {
    this.n = name;
    this.a = age;
    this.s = salary;
  }
  update(new_salary) {
    this.s = new_salary;
  }
}
let wor1 = new Worker("hossam", 38, 10000);
let wor2 = new Worker("Ali", 30, 9000);
console.log(wor2.s);
wor2.update(200000);
console.log(wor2.s);
let str1 = "hossa badr";
let str2 = new String("hossam badr");
console.log(typeof str1);
console.log(typeof str2);
console.log(str1 instanceof String); //false
console.log(str2 instanceof String); //true
console.log(str1.constructor === String); //true
console.log(str2.constructor === String); //true
let num1 = 1000;
let num2 = new Number(1000);
console.log(typeof num1);
console.log(typeof num2);
console.log(num1 instanceof Number); //false
console.log(num2 instanceof Number); //true
console.log(num1.constructor === Number); //true
console.log(num2.constructor === Number); //true
