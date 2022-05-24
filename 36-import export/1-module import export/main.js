/*
if u wanna to import from module u have to put type = "import" in script-tag => main.js
 */
import { str, arr, sayHello as hello } from "./script.js"; // u can use elias => sayHello as hello
console.log(str);
console.log(arr);
console.log(hello());
