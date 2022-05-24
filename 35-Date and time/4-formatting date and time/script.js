/*
    new Date (str | number | Date)
 */
let today = new Date(0); // number in millisec
console.log(today);
myBirthday = Date.parse("1983-12-18"); //Date.parse("str") => return millisec from that date and 1-1970
console.log(myBirthday);
today = new Date(440553600000); //return date from 1-1970 till that date
console.log(today);

let today3 = new Date("1983/12/18"); //ISO=> year month day
console.log(today3);
let today4 = new Date("1983#12#18");
console.log(today4);
let today5 = new Date("1983");
console.log(today5);
let today6 = new Date("83");
console.log(today6);
let today7 = new Date("Dec, 1983, 18");
console.log(today7);
let today8 = new Date("1983-12-18T05:10:00Z"); //if u remoev Z will return original time without +3
console.log(today8);
let today9 = new Date(83, 11, 18, 2, 30, 50); //year, month[index], day, hour, min, sec
console.log(today9);
