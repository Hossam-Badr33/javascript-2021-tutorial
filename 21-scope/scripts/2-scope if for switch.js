var num1 = 25;
let num2 = 100;

function multiply() {
  var num1 = 100;
  return `${25 * 100}`;
}
console.log(multiply());
console.log(num1);

if (true) {
  var num1 = 100; //global var (var)
  let num2 = 25; //local var (let)
}
console.log(`${num1}`);

for (let i = 0; i < 2; i++) {
  let num1 = 200; //local var
  let num2 = 100; //local var
  var num3 = 300; //global var
  console.log(`${num1} ${num2}`);
}
console.log(`${num3}`);

if (5 < 10) {
  let hossam = "programmer"; //local var
  switch (`${hossam}`) {
    case "programmer":
      console.log(`good one`);
      break;
    case "korea":
      console.log(`it's ok`);
      break;
  }
}
console.log(`${hossam}`); //error
