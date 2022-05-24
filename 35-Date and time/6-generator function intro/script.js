/*
generator function by adding * after function =>function*
it work with yield => each yield released 1-time nad after it stop till ask for next yield
 */
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
let generator = generateNumbers();
console.log(generateNumbers()); //object
console.log(generator); //object
//yields
console.log(generator.next().value + " first yield"); //first yield
console.log(generator.next().done + " second yield"); //second
console.log(generator.next().value + " third yield"); //third
console.log(generator.next().done + " fourth yield"); //fourth
console.log(generator.next().done + " no yield"); //no yield so it give true
for (let number of generateNumbers()) {
  console.log(number);
  //output 1, 2, 3, 4 because you loop on generatorsNumbers();
}
for (let number of generator) {
  console.log(number);
  //no output because yield released 1-time
}
