class Person {
  constructor(name, age, salary) {
    this.nm = name;
    this.ag = age;
    this.sa = salary;
  }
  getSalary() {
    return `your salary in pound is ${this.sa * 8}`;
  }
}
let person1 = new Person("hossam", 38, 7000);
console.log(Person.prototype);
let str = "hello world";
console.log(String.prototype);
console.log(str.indexOf("l"));