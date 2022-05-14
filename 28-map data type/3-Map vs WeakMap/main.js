/*
Map vs WeakMap 
 1- WeakMap allows Garbage to do it's task but not map.
 2- Map key => can be any thing.
    WeakMap => key can be Object only.
 */
let iterator = [
  ["name", "hossam"],
  [{ key: 1 }, "ahmed"],
];
const map = new Map(iterator);
map.set(true, "Badr");
iterator = null;
let iterator1 = [
  [{ key1: "hazem" }, true],
  [{ key2: "bahr" }, 2],
];
console.log(map.size);
const weakMap = new WeakMap(iterator1);
console.log(weakMap);
weakMap.set({person: "reda"}, 5);
iterator1 = null;
console.log(weakMap);
