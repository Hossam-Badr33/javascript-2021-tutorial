/*
arr.copyWithin():
- method copies array elements to another position in the array.
- does not add items to the array. but replace them
- array.copyWithin(target, start[opt], end[opt])
    a- target	Required.
The index (position) to copy the elements to.
    b- start	Optional.
The start index (position). Default is 0.
    c- end	Optional.
The end index (position). Default is the array length.
 */
let arr = [10, 20, 30, 40, 50, "A", "B"];
console.log(arr.copyWithin(3)); //[10, 20, 30, 10, 20, 30, 40];
let arr1 = [10, 20, 30, 40, 50, "A", "B"];
console.log(arr1.copyWithin(2, -2)); //[10, 20, "A", "Bs", 50, "A", "B"];
let arr2 = [10, 20, 30, 40, 50, "A", "B"];
console.log(arr2.copyWithin(2, -2, -1)); //[10, 20, 'A', 40, 50, 'A', 'B']
