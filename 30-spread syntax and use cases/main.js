/*
    spread Operator => Iterable
    allow elements to expand in place
 */
//spread with string
let name1 = "hossam";
console.log(...name1); // h o s s a m
console.log([...name1]); //['h', 'o', 's', 's', 'a', 'm']
//concatenate 2 arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let sumArrays = [...arr1, ...arr2];
console.log(sumArrays); //[1, 2, 3, 4, 5, 6, 7, 8]
console.log(...arr1);
let ob = {
  name: "hossam",
  age: 38,
  job: "programmer",
};
console.log([...Object.keys(ob)]);
//copy array
let sameArr1 = [...arr1];
console.log(sameArr1); //[1, 2, 3, 4]
//push inside array
let arr3 = [-1, 0];
let pushedArray = arr1;
arr1.push(...arr3);
console.log(pushedArray);
//use with Math object
let numbers = [10, 20, -10, -200, 500];
console.log(Math.max(10, 20, -10, -200, 500));
console.log(Math.min(...numbers));
//merge objects
let ob1 = {
  lan1: "HTML",
  lan2: "CSS",
};
let ob2 = {
  lan3: "javascript",
  lan4: "python",
};
let allLanguages = { ...ob1, ...ob2, lan5: "PHP" }; //extract in {}
console.log(allLanguages);
