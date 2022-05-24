/*encapsulation
- class fields are public by default;
- encapsulation guards data aginst illegal access
- help to achieve target without reveal it's complex details
 */
class User {
  #s; //must decalre encapsulation property
  static count = 0; //class var
  counter = 0;
  constructor(name, id, salary) {
    //public property
    this.n = name;
    this.i = id;
    this.#s = salary; //to decalre add #
    User.count++;
    this.counter++;
  }
  //private method new class inherited also
  getSalary() {
    return this.#s * 1.5;
  }
  //private method new class inherited also
  greeting() {
    return `hello ${this.n}`;
  }
}
let user1 = new User("hossam", 100, 7000);
console.log(user1.n);
console.log(user1.counter);
console.log(User.count);
console.log(user1.s); //unaccessible property undefinedencapsulated
console.log(user1.getSalary());//reveal value through get method

class SecondUser extends User {
  constructor(name, id, salary, age) {
    super(name, id, salary);
    this.a = age;
  }
}
let secondUser1 = new SecondUser("ahmed", 101, 5000, 30);
console.log(secondUser1.n);
console.log(secondUser1.s); //new class inherite encapsulated property also undefined
console.log(secondUser1.a);
console.log(secondUser1.greeting());
console.log(secondUser1.getSalary());
