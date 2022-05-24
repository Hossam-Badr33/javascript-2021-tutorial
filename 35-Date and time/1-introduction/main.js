/*
make new object like so (costructor)
*/
let date = new Date();
console.log(date);
console.log(date.getDate()); //object.methods()
/*
static methods for ex:
    Date.now() => date in milsec from 1-1970 
 */
console.log(Date.now() + " " + "millisec");
let seconds = Date.now() / 1000;
console.log(seconds + " " + "sec");
let minutes = seconds / 60;
console.log(minutes + " " + "min");
let hours = minutes / 60;
console.log(hours + " " + "hour");
let days = hours / 24;
console.log(days + " " + "days");
let months = days / 30;
console.log(months + " " + "months");
let years = months / 12;
console.log(years + " " + "years");
