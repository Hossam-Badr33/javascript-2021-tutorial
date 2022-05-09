let arr = ["hossam", "ahmed", 1, 36, "said", 200],
  onlyString = [];
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    onlyString.push(arr[i]);
  }
}
console.log(onlyString);

let products = ["Keyboard", "Mouse", "Pen", "Monitor"],
  color = ["Red", "Green", "Black"],
  models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(10));
  console.log(`${products[i]}`);
  console.log("#".repeat(10));
  console.log(`colors: `);
  for (let j = 0; j < color.length; j++) {
    console.log(`${color[j]}`);
  }
  console.log(`models: `);
  for (let k = 0; k < models.length; k++) {
    console.log(`${models[k]}`);
  }
}
