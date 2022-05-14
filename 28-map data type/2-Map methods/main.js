const map = new Map([
  ["name", "hossam"],
  [true, "Boolyen"],
  [2, "last name"],
]);
console.log(map);
map.set(false, "real");//Map.set(key, value)
console.log(map);
console.log(map.get(true));//Map.get(key)
console.log(map.values());//Map.values()
console.log(map.size);//Map.size 
console.log(map.delete(2));//Map.delete(key) => in console wil give true if key exist 
console.log(map.has(2));//Map.has(key)
map.clear();//Map.clear()
console.log(map);
