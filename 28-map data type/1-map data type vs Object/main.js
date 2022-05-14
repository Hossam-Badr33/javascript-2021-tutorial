/*
Map => data-type required iterable (with key, value)
 */
//Map vs Object
/*
1-Map    => does not contain key by default.
  Object => has key by default.
 */
const ob = {
  1: "hossam",
  1: "Badr", //typeof 1 is string
  "1 key": "will read it",
};
console.log(ob[1]); // it will give u Badr note first_key (1) will not read
let ob1 = {}; //ob => prototype normal_object
console.log(ob1);
let ob2 = Object.create(null); //Object => no properties
console.log(ob2);
const map0 = new Map();
console.log(map0); //entries =>  no roperties
const map = new Map([[1, "hossam"]]); //iterator with key & value
console.log(map);
/*
2-Map    => key may be anything (function, Object, array, any primritive data-types).
  Object => key only (string or symbol).
 */
const map1 = new Map();
map1.set(1, "hossam");
map1.set("name", "Badr");
map1.set([1, 2, 3, 4], "numbers");
map1.set({ key1: 30, key2: 40 }, "Badr");
map1.set(false, "Boolyen");
map1.set(function () {}, "function");
map1.delete("name");
console.log(map1);
/*
3-Map    => order keys by insertion.
  Object => keys not 100% ordered till now.
 */
/*
4-Map    => get items by size.
  Object => need to do manually .
 */
console.log(map1.size);
console.log(Object.keys(ob).length);
/*
5-Map    => can iterate keys directly.
  Object => not directly but through other ways like Object.keys().
 */
/*
6-Map    => is better performance and very fast when add.remove data.
  Object => low performance comparing to Map.
 */
