//start time
let start = new Date();
//operation
for (let i = 0; i < 1000; i++) {
  //document.write(`<div>${i}</div>`);
  let div = document.createElement("div");
  //let text = document.createTextNode(`${i}`);
  div.appendChild(document.createTextNode(`${i}`));
  document.body.appendChild(div);
}
//end time
let end = new Date();
//estimation of that operation
let estimation = end - start;
console.log(estimation);
/*
performance.now() => return time in milliseconds from current time 
*/
let t0 = performance.now();
for (let i = 0; i < 100; i++) {
  document.write("<p>" + i + "</p>");
}
let t1 = performance.now();
console.log(`time elapsed from ${t0} to ${t1} is equal ${t1 - t0} milliseconds`);
/*
performance.mark()
 */
//create bunch of markes
let ex = performance.mark("hossam");
let ex1 = performance.mark("hazem");
let ex2 = performance.mark("ahmed");
let ex3 = performance.mark("ali");
//get all of performanceMark entries
const allEntries = performance.getEntriesByType("mark");
console.log(allEntries.length);
const hossamEntries = performance.getEntriesByName("hossam");
//get of hossam performanceMark entries
console.log(hossamEntries.length);
const hazemEntries = performance.getEntriesByName("hazem");
console.log(hazemEntries.length);
//clear out all marks
performance.clearMarks();
const allEntries1 = performance.getEntriesByType("mark");
console.log(allEntries1.length)