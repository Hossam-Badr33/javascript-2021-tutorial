let chosen = 3; //when change chosen_value it gives u following => corresponding object in friends with title,age, availability and second programming language
let myFriends = [
  { title: "Osama", age: 40, available: true, skills: ["HTML", "CSS"] },
  { title: "Hossam", age: 38, available: false, skills: ["python", "Django"] },
  { title: "Ali", age: 35, available: true, skills: ["PHP", "Laravel"] },
];

function person() {
  let index = chosen - 1;
  let ob = myFriends[index];
  let {
    title,
    age,
    available,
    skills: [, last_lang],
  } = ob;
  if (available === true) {
    available = "available";
  } else {
    available = "not available";
  }
  console.log(`${title} ${age} ${available} ${last_lang}`);
}
person();
