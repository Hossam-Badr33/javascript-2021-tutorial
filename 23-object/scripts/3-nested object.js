var job = true;
let myObject = {
  firstName: "hossam",
  secondName: "Badr",
  age: 38,
  job: false,
  address: {
    Russia: "Moscow",
    egypt: {
      address1: "Sharkia",
      address2: "Cairo",
    },
  },
  checkStatus1: function () {
    if (myObject.job === true) {
      //myObject.job --> local-object-var
      return `vailable`;
    } else {
      return `still not ready`;
    }
  },
  checkStatus2: function () {
    if (job === true) {
      // job ----> global-var
      return `vailable`;
    } else {
      return `still not ready`;
    }
  },
  hobbies: ["football", "swimming", "travel"],
};
console.log(`${myObject.firstName}`);
console.log(`${myObject["secondName"]}`);
console.log(`${myObject.age}`);
console.log(`${myObject.address.Russia}`);
console.log(`${myObject.address.egypt.address1}`);
console.log(`${myObject["address"]["egypt"]["address2"]}`);
console.log(`${myObject.checkStatus1()}`);
console.log(`${myObject.checkStatus2()}`);
console.log(`${typeof myObject.hobbies} ${myObject.hobbies[0]} ${myObject.hobbies.join("|")}`); //here u can access array properties
