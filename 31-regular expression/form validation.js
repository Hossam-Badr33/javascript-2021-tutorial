let form = document.getElementById("form");
form.onsubmit = function (e) {
  let phoneNumber = document.querySelector("input").value;
  let valid = /\(\d{4}\)\s\d{3}-\d{3}/gi;
  console.log("submited");
  if (valid.test(phoneNumber)) {
    console.log("ok");
  } else {
    e.preventDefault();
    console.log("not true");
  }
};
let reg = /(?=.*\d)/;
console.log(reg.test("6"));
let reg1 = /(?=.*[a-z])/;
console.log(reg1.test("d"));