let today = new Date();
today.setDate(20); //day of month
console.log(today);
today.setFullYear(2021); //year, month[opt], date[opt]
console.log(today);
today.setHours(25); //hour, min[opt], sec[opt], milsec[opt]
console.log(today);
today.setMilliseconds(1000);
console.log(today);
today.setMinutes(55, 10); //min, sec[opt], milsec[opt]
console.log(today);
today.setMonth(12, 10); //month, date[opt]
console.log(today);
today.setTime(1000); //date from 1970  setTime(millsec)
console.log(today);
