/*
Object.defineProperties(ob_name, {new_properties});
 */
const ob = {
  a: 1,
  b: 2,
  c: 3,
};
Object.defineProperties(ob, {
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
  f: {
    configurable: true,
    value: 6,
  },
});
console.log(ob);
//Object.getOwnPropertDescriptor(ob_name, "property_name");
console.log(Object.getOwnPropertyDescriptor(ob, "a"));
console.log(Object.getOwnPropertyDescriptor(ob, Object.keys(ob)[0]));
//Object.getOwnPropertDescriptories(ob_name);
console.log(Object.getOwnPropertyDescriptors(ob));
