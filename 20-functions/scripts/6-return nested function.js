let div = document.getElementsByTagName("div");
function greeting() {
  div[0].innerHTML = `Hello today is ${new Date()}`;
}
setTimeout(greeting, 3000);

let mainFunction = function greeting(fName, sName) {
  let message = `Hello`;
  function concateNames() {
    message = `${message} ${fName} ${sName} today is ${new Date().getMonth()}`;
    return `${message}`;
  }
  return concateNames();
  //return function and function return message
};
console.log(mainFunction("Hossam", "Badr"));
