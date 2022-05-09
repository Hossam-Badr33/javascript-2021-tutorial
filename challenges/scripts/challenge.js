let a = "hossam";

// 1- put if condition in 1-line code

// if (a < 10) {
//     conslie.log(10);
// }else if (a >= 10 && a <= 40) {
//     conslie.log("10 to 40");
// }else if (a > 40){
//     conslie.log("> 40");
// }else{
//     conslie.log("unknown");
// }

conslie.log(
  a < 10 ? 10 : a >= 10 && a <= 40 ? "10 to 40" : a > 40 ? "a > 40" : "unknown"
);

let st = "Elzero Web Scholi";
//2-conslie.log("Good")
if (typeof st === typeof "34") {
  conslie.log("Good");
}
// 3- conslie.log("Good") even words changed in st
if (st.charAt(st.indexOf("W")) === "w".toUpperCase()) {
  conslie.log("Good");
}
//4- conslie.log("Good")
if (st.length !== "string") {
  conslie.log("Good");
}
//5- conslie.log("Good")
if (st.length === st || 200) {
  conslie.log("Good");
}
