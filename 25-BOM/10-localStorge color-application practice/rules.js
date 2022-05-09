/*
The forEach() method executes a provided function once for each array element.
    array.forEach(element => console.log(element))
 */
let arr = ["hossam", "mohamed", 38];
arr.forEach((i) => {
  console.log(i);
});
let arr1 = ["hossam", "mohamed", 38];
arr1.forEach((ele) => console.log(ele));
let arr2 = ["hossam", "mohamed", 38];
arr2.forEach(function (x) {
  console.log(x);
});
let arr3 = ["hossam", "mohamed", 38];
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
/*
e.target --> object
if u write in any tag data-name="value":
    tag.target/curentTarget.dataset= {data-name:"value"}
 */
let div = document.querySelector('[mydiv="first"]');
console.log(div);
div.onclick = function (e) {
  console.log(e.target.dataset);
  console.log(e.currentTarget.dataset.color);
  console.log(e);
  div.style.backgroundColor = div.dataset.backgroundcolor;
};
console.log(div.dataset.backgroundcolor);
