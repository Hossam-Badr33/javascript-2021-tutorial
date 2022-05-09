let ob = {
  name: "ahmed",
  family: "sabry",
  age: 40,
};
//old way to set variable for ob.key
/*let name = ob.name;
console.log(name);
*/
//ob-destructuring
/*let { name, family, age } = ob;
console.log(`${name} ${family} ${age}`);
*/
//if already declared
/*let name = ob.name;
let family = ob.family;
let age = ob.age;
({ name, family, age } = ob);
console.log(`${name} ${family} ${age}`);
*/
let user = {
  theName: "Hossam",
  theAge: 38,
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};
let {
  theName,
  theAge: a, //to change var_name
  theCountry,
  theColor = "Blue",
  hobby: h = "swimming",
  skills: { html, css: cs }, //nested ob
} = user;
console.log(`${theName} ${a} ${theColor} ${h} ${html} ${cs}`);
//another way for nestd ob
//but you have to change var_name because it declared before
const { html: firstLang, css: secondLang } = user.skills;
console.log(`${firstLang} ${secondLang}`);
