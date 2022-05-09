// 1st way:
let normalObject = {};
normalObject.fName = "hossam"; //add property
console.log(normalObject.fName);
//2nd way:
let objectMethod1 = new Object();
objectMethod1["sayHello"] = function () {
  //add function
  return `Hello`;
};
console.log(objectMethod1.sayHello());
//3rd method almost same 2nd:
let objectMethod2 = new Object({
  country: "Egypt",
});
objectMethod2["country"] = "Russia"; ////override property-value
console.log(objectMethod2.country);
