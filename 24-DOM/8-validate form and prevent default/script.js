let name_ = document.querySelectorAll("input")[0],
  age = document.querySelectorAll("input")[1],
  send = document.getElementsByTagName("input")[2];

send.onclick = function (e) {
  let nameValue = false; // first make default false
  let ageValue = false; // first make default false
  if (name_.value !== "" && name_.value.length <= 9) {
    nameValue = true; //change default to true
  }
  if (age.value !== "") {
    ageValue = true; //change default to true
  }
  if (nameValue === false || ageValue === false) {
    e.preventDefault();
  }
};
document.links[0].onclick = function (e) {
  console.log(e);
  e.preventDefault();
};
