function* generateThings() {
  yield 1;
  yield 2;
  return `stop from return`;
  yield 3;
  yield 4;
}
let generate = generateThings();
console.log(generate.next());
console.log(generate.next());
console.log(generate.next()); //done true=> return

function* generateInfinite() {
  let num = 0;
  while (true) {
    yield num++; //it's not infinite loop it generate when called
  }
}
let generate2 = generateInfinite();
console.log(generate2.next()); //0
console.log(generate2.next()); //1
console.log(generate2.next()); //2
console.log(generate2.next()); //3 and so on
