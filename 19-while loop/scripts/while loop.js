let index = 0,
 names = ["hossam", "mohamed", "ali"];
//while(true) {
//     do function
// }
while (index < 2) {
    console.log(names[index]);
    index++;
}

while (true) {
    console.log(names[index]);
    index++;
    if (index === 3) {
        break;
    }
}
while (false) {
    console.log(index);
    index = index + 1;
}
do {
    console.log(index);
    index++;
} while (false);
console.log(index); //condition excuted but index carry value 1
console.log(false == 1);