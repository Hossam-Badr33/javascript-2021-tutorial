let name_ = "hossam";
age = 38;

function detail() {
  let name_ = "Ahmed"; //local 3
  function greet() {
    let name_ = "Sayed"; //local 2
    function allData() {
      let name_ = "Maged"; //local 1
      console.log(`hi ${name_} age is ${age}`);
    }
    allData();
  }
  greet();
}
detail();
