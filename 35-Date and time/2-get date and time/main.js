let birthDay = new Date("18, dec, 1983");
let ageYear = birthDay.getFullYear();
console.log(birthDay);
console.log(typeof ageYear);
let dateToday = Date.now() / 1000 / 60 / 60 / 24 / 365;
let today = new Date();
let year = today.getFullYear();
console.log(year);
console.log(dateToday);
let myAge = year - ageYear;
console.log(today.getDay()); //day of the week by index sun => 0
console.log(today.getDate()); //day of month
console.log(today.getHours()); //hours in date using local time
console.log(today.getMinutes()); //min in date using local time
console.log(today.getSeconds()); //seconds of date using local time
console.log(today.getMonth()); //month [index 0] start from jan in date using local time
console.log(today.getTime()); //time value in millsec from 1970 like Date.now()
