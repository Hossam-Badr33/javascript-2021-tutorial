function sayHello(Name, Age) {
    console.log(`Hi: ${Name} your Age is: ${Age}`);
}
sayHello("Hossam", 38);

// function startCount(start, end) {
//     for (let year=start; year<=end; year++) {
//         if (year === 2020) {
//             continue;
//         }
//         console.log(year);
//     }
// }
// startCount(1983, 2021);

function howAreYou(Name) {
    return `I'm fine ${Name}`;
}
console.log(howAreYou("Hossam"));

function calc(num1, num2) {
    return `${num1 + num2 + 30}`;
}
console.log(calc(10, 20));

