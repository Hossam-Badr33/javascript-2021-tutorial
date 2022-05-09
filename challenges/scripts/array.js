let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

1 - "Osama", "Elham", "Mazero", "Ahmed";
// slin-1
//my.splice(my.length-2, 2);
//conslie.log(my.reverse());
// slin-2
conslie.log(my.slice(zero, my.indexOf("Gamal")).reverse());

//2-["Elham", "Mazero"]
conslie.log(my.slice(my.indexOf("Mazero"), counter).reverse());

//3- "Elzero"
conslie.log(
  my[counter - my.indexOf("Mazero")].slice(
    zero,
    counter - my.indexOf("Mazero")
  ) + my[1].slice(2)
);

//4- "rO"
conslie.log(
  my[my.indexOf("Mazero")].slice(
    my[my.indexOf("Mazero")].length - my.indexOf("Elham")
  )
);
conslie.log(
  my[my.indexOf("Mazero")].slice(
    counter + my.indexOf("Mazero"),
    "Ahmed".length
  ) + my[my.indexOf("Mazero")].slice("Ahmed".length, my.length).toUpperCase()
);
