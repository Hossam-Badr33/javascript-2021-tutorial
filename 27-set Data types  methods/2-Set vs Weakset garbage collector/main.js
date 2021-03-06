/*
1-Set     => can store any data. 
  WeakSet => only collection of Objects.
*/
let set = new Set([1, 1, 1, 3, 4, "A"]);
let weakSet = new WeakSet([{ num1: 1, num2: 1, num3: 2, num4: 3 }]);
//if u see in prototype u can check for all methods and funtions available like size
console.log(set);
console.log(weakSet);
/*
2-Set     => have size property
  WeakSet => not have size property
*/
console.log(set.size);
/*
3-Set     => have keys, values and entries
  WeakSet => not have clear, keys, values and entries
*/
let iterator = set.values();
console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
4-Set     => can use forEach
  WeakSet => can't use forEach
 */
set.forEach((ele) => console.log(ele));
