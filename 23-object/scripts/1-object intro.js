/*object
u can create inside object:
1- properties ---> like variables or keys when u write u get it's value.
2-methods ---> functions */
let hossam = {
  //object-properties
  firstName: "Hossam",
  lastName: "Badr",
  age: 38,
  job: "full-stack developer",
  //object-methods
  sayTruth: function () {
    return `kefaia تعريص`;
  },
};
console.log(`${hossam.firstName} ${hossam.lastName} ${hossam.age} ${hossam.job} </br> ${hossam.sayTruth()}`);
