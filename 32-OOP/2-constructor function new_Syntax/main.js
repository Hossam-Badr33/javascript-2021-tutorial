class Person {
  constructor(name, id, salary) {
    //properties
    this.name = name;
    this.id = id || "unknown";
    this.salary = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `hello ${this.name} salary is ${this.salary}`;
    };
    //increaseSalry = {};
  }
  //methods (outof constructor)
  sayHello() {
    return `hello ID ${this.id}`;
  }
}
let person1 = new Person("hossam", 100, 5000);
let person2 = new Person("ahmed", "", 6000);
let person3 = new Person("said", 102, 7000);
let person4 = "samira";
console.log(person2.id);
console.log(person1.salary);
console.log(person1.msg());
console.log(person1.sayHello());
//if u wanna to check if it object or not
console.log(person3 instanceof Person); //true
console.log(person4 instanceof Person); //false
console.log(person3.constructor === Person); //true
console.log(person4.constructor === Person); //false
