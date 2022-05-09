var money = 5000; //global in wndow
console.log(this.money); //=== window.money
console.log(this); // window
console.log(this.money === money); //true

//if function not related to any object it will be (this) related to window as global object
function whoAreU() {
  return `related to ${this}`;
}
console.log(whoAreU()); //window
//if related to object like following cases (this) refer to these objects which inside it.
let object_ = {
  who: "it's me",
  sayHello: function () {
    return `hello ${this.who}`;
  },
  pick: {
    choice1: "fuck u",
    choice2: "fuck her",
  },
  addProperty: function () {
    this.age = 38;
  },
};
object_.addProperty();
console.log(object_);
document.getElementById("but").onclick = function () {
  console.log(this); //this --> button related object
};
