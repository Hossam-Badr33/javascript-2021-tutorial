class User {
  constructor(name, id) {
    this.userName = name;
    this.userID = id;
  }
  sayHello() {
    return `hello ${this.userName}`;
  }
}
class Admin extends User {
  constructor(name, id, availity) {
    super(name, id);
    this.av = availity;
  }
}
class SuperAdmin extends Admin {
  constructor(name, id, availity, IP) {
    super(name, id, availity);
    this.add = IP;
  }
}
let user = new User("hossam", 100);
let admin = new Admin("hazem", 101, 1);
let sup = new SuperAdmin("kareem", 102, 1, 127);
console.log(user.userName);
console.log(admin.userName);
console.log(sup.userName);
