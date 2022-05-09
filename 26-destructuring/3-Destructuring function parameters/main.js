let user = {
  fName: "hossam",
  lName: "Badr",
  age: 38,
  skills: {
    html: 70,
    css: 80,
  },
};
//1- normal old way
/*function showSkills(user) {
  console.log(
    `your name: ${user.fName} your last Name ${user.lName} your skills progress in HTML is: ${user.skills.html}`
  );
}
showSkills(user);
*/
//destructuring way
function showSkills({ fName, lName: F, age, skills: { html } }) {
  console.log(
    `your name: ${fName} your last Name ${F} your skills progress in HTML is: ${html}`
  );
}
showSkills(user);
