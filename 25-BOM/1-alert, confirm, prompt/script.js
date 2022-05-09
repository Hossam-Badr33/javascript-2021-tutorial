/*
note: this 3-codes not used now modern libraries used they prohibit all actions in html till click
1-alert(message)   --> need response only ok available
2-confirm(message) --> need message return Boolyen
3-prompt(message, default message[like placeholder]) --> collect data
*/
window.alert("Hi"); //3-codes same result
this.alert("Hi");
alert("Hi");

let confirmmsg = confirm("want to confirm buying ?");
if (confirmmsg === true) {
  console.log("ok process buying");
} else {
  console.log("no action");
}
window.console.log("Hossam");
this.console.log("Hossam");
console.log("Hossam");
let input = prompt("pick a day", "max 3 letters");
console.log(input);
