let myObject = {
  key1: "hossam",
  key2: "badr",
};
Object.defineProperty(myObject, "key3", {
  writable: false,
  enumerable: false,
  configurable: true,
  value: "programmer",
});
//writable: true => u can override key_value
console.log(myObject);
myObject.key3 = "not yet";
console.log(myObject);
//enumerable: true => u can loop on key
for (let key in myObject) {
  console.log(`${key} ${myObject[key]}`);
}
//configurable: true => can delete and re-define
//1-delete
console.log(delete myObject.key3);
console.log(Object.keys(myObject));
console.log(myObject);
//2-redefine same property ie modify it
//note if u not determine writable, enumerable, configurable => by default [false]
Object.defineProperty(myObject, "key3", { value: "good future" });
console.log(myObject);