var name1 = "elzero web school",
  name2 = "    hossam    ";
console.log(name1[2]); //z
console.log(name1[17]); //z
console.log(name1.charAt(2)); //undefined
console.log(name1.charAt(17)); //empty string
console.log(name2.trim()); //remove spaces--->hossam
console.log(name2.toUpperCase()); //      HOSSAM
console.log(name2.toLowerCase()); //      hossam
console.log(name2.trim().charAt(2).toUpperCase()); //S
