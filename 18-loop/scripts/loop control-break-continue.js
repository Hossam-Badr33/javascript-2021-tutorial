let products = ["Keyboard", 50, "Mouse", 100, 200, "Pen", "Monitor"],
  colors = ["Red", "Green", "Black"];
mainLoop: for (let i = 0; i < products.length; i++) {
  //1st soln to keep only strings
  //   if (typeof products[i] === "string") {
  //     console.log(`\n${products[i]}`);
  //     console.log(`#`.repeat(10));
  //     continue;
  //   }
  //2nd soln to remove numbers
  if (typeof products[i] === "number") {
    continue;
  }
  console.log(`\n${products[i]}`);
  console.log(`#`.repeat(10));
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`${colors[j]}`);
    if (colors[j] === `Green`) {
      break mainLoop;
    }
  }
}
