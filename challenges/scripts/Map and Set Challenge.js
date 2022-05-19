let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(); //result => 210 without using index or arithmetic operators or higher order functions
/* 1st soln: idea is to multiply 30 * 7*/
console.log([...n1, ...n2].length * Math.max(...n2));
/* 2nd soln: idea is to multiply 3* 7* 10 */
console.log([...n1, ...n2].length * new Set(n2).size * Math.min(...n1));
