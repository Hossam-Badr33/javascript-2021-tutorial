function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
  yield "D";
}
function* generateAll() {
  yield* generateNumbers();
  yield* generateLetters();
  yield* [5, 6, 7, 8];
}
let generate = generateAll();
console.log(generate.next()); //1
console.log(generate.next()); //2
console.log(generate.next()); //3
console.log(generate.next()); //4
console.log(generate.next()); //A
console.log(generate.next()); //B
console.log(generate.next()); //C
console.log(generate.next()); //D
console.log(generate.next()); //5
console.log(generate.return("stop")); //undefined done true
console.log(generate.next()); //undefined due to return
console.log(generate.next()); //undefined
console.log(generate.next()); //undefined
