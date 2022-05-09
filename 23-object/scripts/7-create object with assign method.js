let obj1 = {
    first_name: "Hossam",
    sayAge: function () {
      return "age is 38";
    },
    number: 50,
  },
  obj2 = new Object({ lastName: "Badr", job: "Full-stack developer" }),
  obj3 = Object.create(obj1), //prototype
  targetObject = {
    country: "Egypt",
    sayHello: function (country) {
      return "my Current country is" + country;
    },
    number: 100,
  },
  /*Object.assign(targetObject old or new {} [which u gonna send property to him], old Object1, old Object2,..., {new Object}) 
  Note: if property repeated in old Object and targetObject it will take first one*/
  obj4 = Object.assign(targetObject, obj1),
  obj5 = Object.assign({}, obj2, {
    salary: 7000,
    sayNo: function (person) {
      return `No ${person}`;
    },
  });
console.log(obj4);
console.log(obj5);
