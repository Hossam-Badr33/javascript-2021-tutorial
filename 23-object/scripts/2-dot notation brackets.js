var job = "programmer_type";
let data = {
  fName: "hossam",
  "last Name": "Badr",
  age: 38,
  programmer_type: "full-stack",
};
//if properties of best practice u can access it's value with 2 ways  with dot notation objetc.property or bracket object[property]
console.log(data.fName);
console.log(data["fName"]);
//if properties not best practice u can only access it's value with bracket object["property"]
console.log(data["last Name"]);
//if properties is variable-valye u can access it's value only with bracket object[property === variable_name]
console.log(data.job); //undefined not working
console.log(data[job]);
