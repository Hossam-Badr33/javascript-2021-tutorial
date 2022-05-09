let arr = [10, 20, 30, 40, 50]; //sum-all 150

let reduceArr1 = arr.reduce(function (acc, curr, index, arr) {
    console.log(`accumlator ---> ${acc}`);
    console.log(`current ---> ${curr}`);
    console.log(`index of current ---> ${index}`);
    console.log(`original array ---> ${arr}`);
    console.log(`------------------`);
    return acc + curr;
})

// reduce with arrow function
let reduceArr2 = arr.reduce((acc, current, index, arr) => acc + current, 5);
console.log(reduceArr2);

// reduce with initial argument
let reduceArr3 = arr.reduce((acc, curr, index, array) => acc + curr, 50); //50 is initial value means like array will had first number of 50 of index 0 ie 6 elements
console.log(reduceArr3);