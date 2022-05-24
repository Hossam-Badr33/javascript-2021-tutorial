/*
add to prototype => class.prototype.property/method = .......;
                 => fbuilt_in_functon.prototype.property/method = .........;
 */
class Employee {
  constructor(name, id, salary) {
    this.nm = name;
    this.ID = id;
    this.sa = salary;
  }
}
console.log(Employee.prototype);
let emp1 = new Employee("hossam", 100, 7000);
// console.log(emp1);
Object.prototype.greeting = function () {
  return `hi ${this.nm}`;
};
// console.log(Object.prototype);
Employee.prototype.sayHello = function () {
  return `hello ${this.nm}`;
};
Employee.prototype.love = "I love js";
String.prototype.addDots = function () {
  return `.${this}.`;
};
let str = "hazem";
console.log(str.addDots());
console.log(String.prototype);
