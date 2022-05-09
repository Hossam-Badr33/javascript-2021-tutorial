// get back from myString (Elzero web School) as str in 1-line code without write letters
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,S,c,h,o,o,l,2,0,Z";

//1st soln
let solution = myString
  .split(",")
  .filter((ele) => isNaN(Number.parseInt(ele)))
  .map((ele, ind, arr) => {
    arr.length = arr.length--;
    return ele.replace("_", " ");
  })
  .reduce((acc, ele, index, arr) => acc + ele)
  .slice(true);
console.log(solution);

//2nd soln
let finalString = myString
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele));
  })
  .filter(function (ele) {
    return ele !== ",";
  })
  .slice(1, -1)
  .join("")
  .replace("_", " ")
  .replace("Web", "Web ");
console.log(finalString);
