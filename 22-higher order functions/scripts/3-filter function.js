let numbers = [33, 10, 44, 73, 6, 125, 446],
  names = ["Hossam", "Sameer", "sayed", "salma", "gamal"];

/* fiter function is like map function:
 except it return only true values for the condition not do any actions on it*/
//with filter
let filterNumbers = numbers.filter((ele) => ele%2 === 0);
console.log(filterNumbers);

// with map:
let odd = [];
let even = [];
//1- normal 
// let mapNumbers = numbers.map(function (ele) {
//   //console.log(ele);
//   if (ele % 2 === 0) {
//     even.push(ele);
//   }else{
//     odd.push(ele);
//   }
// });
//2-arrow
numbers.map((ele) => ele % 2 === 0 ? even.push(ele): odd.push(ele));
console.log(odd);
console.log(even);

