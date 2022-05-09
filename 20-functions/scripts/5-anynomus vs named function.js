var button = document.getElementById("button");

button.onclick = console.log(calculate(20, 20));

function calculate(num1, num2) {
  return `${num1 + num2}`;
}

let greeting = function sayHello() { // u can put named function in variable but note in this case u can use variable after line of function because function only runing after variable declared
  console.log("hi Hossam");
};
greeting();

//goodMorning();    //----->  this will lead to error
let goodMorning = function () {
  console.log("Good Morning");
};

goodAfternoon(); // but here if u not put name function in variable u can write function name before declare it
function goodAfternoon () {
    console.log("Good Afternoon");
}

// u can declare function without name i some cases like an event
window.onload = function () {
    alert ("js message");
}

