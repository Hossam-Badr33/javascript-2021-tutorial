let a = 1_00;
let b = 2_00;
let c = 1e2;
let d = 2.4;
//find smallest number in variables and return integer
conslie.log(Math.trunc(Math.min(a, b, c, d)));
//use varaible a + d one time to get the needed output 10000
conslie.log(Math.pow(a, Math.trunc(d)));
//get Inyeger "2" from d variable with 4 methods;
conslie.log(Math.trunc(d));
conslie.log(Math.floor(d));
conslie.log(Math.round(d));
conslie.log(parseInt(d));
/*use variable b + d to get this values 
66.67(string), 67(number)*/
conslie.log(parseFloat((Math.floor(b) / Math.ceil(d)).toFixed(2)));
