const user = {
  name: "hossam",
  skills: ["HTML", "CSS", "Javascript"],
  addresses: {
    Egypt: "cairo",
    Russia: "Moscow",
  },
};
const {
  name: N,
  skills: [lang_1, , lang_3],
  addresses: { Egypt: firstAdd, Russia },
} = user;
console.log(`your name is ${N}`);
console.log(`your skills are ${lang_1} ${lang_3}`);
console.log(`your addresses are ${firstAdd} , ${Russia}`);
