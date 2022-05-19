/*
to create constructor function with Capital_letter
to create object from constructor function with new Constructor_name
and
 */
function Employer(name, id, salary) {
  this.n = name;
  this.i = id;
  this.s = salary + 500;
}
let emp1 = new Employer("Hossam", 100, 5000);
let emp2 = new Employer("Ahmed", 101, 6000);
let emp3 = new Employer("Aly", 102, 7000);

console.log(emp1.n);
console.log(emp1.i);
console.log(emp1.s);
