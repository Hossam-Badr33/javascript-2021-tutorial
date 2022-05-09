let obj1 = { first_name: "Hossam", secondName: "Badr" },
  obj2 = new Object({}),
  obj3 = new Object({
    number: 50,
    muiply_number: function () {
      return this.number * 2;
    },
  });
obj4 = Object.create(obj3); // it means create object like this and it's values are related ie if u change value of number in obj3 it also changed automatically in obj4

obj2.first_name = "Hossam";
obj2["secondName"] = "Badr";

console.log(obj3);
console.log(obj3.muiply_number());

console.log(obj4); //prototype
console.log(`${obj4.number}  ${obj4.muiply_number()}`); //50 100
obj4.number = 100; //update value of number but if u were not write this in obj3 in multiply_number function number value will not updated in obj4 unless u update number in obj3
console.log(obj4);
console.log(`${obj4.number}  ${obj4.muiply_number()}`);
