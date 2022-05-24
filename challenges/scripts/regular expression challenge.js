let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://www.elzero.org";
let url4 = "https://www.elzero.org:8000/articles.php?id=100cat=topics";
//by 1-reg expression match all yrls;
let regEx =
  /(https?:\/\/)?(www.)?\w{6}\.org(:\d{4}\/\w+.\w+\?\w+\=\d+\w+\=\w+)?/gi;
console.log(url1.match(regEx));
console.log(url2.match(regEx));
console.log(url3.match(regEx));
console.log(url4.match(regEx));
