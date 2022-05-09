let products = ["Keyborad", "Mouse", "Pen", "Pad", "Monitor", "iphone"],
  color = ["Red", "Green", "Blue"],
  number = 4;
  document.write(`<div>`);
document.write(`<h1>Show ${number} Products</h1>`);
for (let i = 0; i < number; i++) {
  document.write(`<h3>${products[i]} :</h3>`);
  for (let j = 0; j < color.length; j++) {}
  document.write(`<p>${color.join(" | ")}</p>`);
}
document.write(`</div>`);

