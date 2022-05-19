/*
static properties for class only can add with static word before it
 */
class User {
  static counter = 0; //static properties related to class only not object
  constructor(name, number) {
    this.count = 0;
    this.userName = name;
    this.userNumber = number;
    User.counter++;
  }
  greeting() {
    console.log(`hi ${this.userName}`);
  }
  static sayHello(user) {
    //static function
    console.log(`hello ${user}`);
  }
}
let user1 = new User("hossam", 100);
let user2 = new User("sayed", 101);
console.log(user1.userName);
console.log(user1.userNumber);
console.log(user1.count);
console.log(User.count); //undefined
console.log(User.counter);
user1.greeting();
//User.greeting();//undefined
User.sayHello("hossam");
