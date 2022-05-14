/*
syntax: new Set (iterable);
A JavaScript Set is a collection of unique values.
Each value can only occur once in a Set.
A Set can hold any value of any data type.
can't access any element by index
 */
let arr = [1, 2, 3, 1, 1, "A"];
let newSet = new Set(arr);
console.log(newSet);
console.log(typeof newSet);
let newSet1 = new Set().add(1).add(1).add(2).add(5); //add()=>Adds a new element to the Set
//or newSet1.add(1).add(1).add(2).add(5);
console.log(newSet1.delete(10)); //delete()	Removes an element from a Set
console.log(newSet1);
console.log(newSet1.size); //.size	Returns the number elements in a Set
console.log(newSet1.has("A")); //has()	Returns true if a value exists
newSet.clear(); //clear()	Removes all elements from a Set
console.log(newSet.size);
console.log(newSet1.keys()); //keys()	Same as values()
console.log(newSet1.values()); //values()	Returns an Iterator with all the values in a Set
console.log(newSet1.entries()); //entries()	Returns an Iterator with the [value,value] pairs from a Set
