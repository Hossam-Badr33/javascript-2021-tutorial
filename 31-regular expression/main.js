/*
1-modifiers => flags:
    i => case-sensitive
    g => global
    m => multilines
2-match 
    match a string agianst regular expession pattern
    string.match("string"|reg ex)
3-test method
 pattern/reg ex.test(string) => result boolyen
4-ranges
    (x|y)  => x or y
    [0-9]  => 0 to 9
    [^0-9] => any chracter except 0-9
    [a-z]  => from a to z lowercase
    [^a-z] => any character except a to z lowercase
    [A-Z]  => from A to Z upperrcase
    [^A-Z] => any character except A to Z upperrcase
    [abc]  => only a,b,c
5-characterclasses
    . => matches any character except newline or other line terminators
    \w => matches word characters [a-z, A-Z, 0-9 and underscore]
    \W => matches non-word character
    \d => matches digits from 0-9
    \D => matches non-digit character
    \s => matches whitespace character
    \S => matches non white-space character
    \b => matches at beginning or end of word
    \B => matches not at beginning or end of word
6-Quantifiers:
    n+      => one or more
    n*      => zero or more
    n?      => zero or one
    n{x}    => number of
    n{x, y} => range
    n{x,}   => at least x
    $..     => ends with something
    ^..     => start with something
    ?=.     => followed by something
    ?!.     => not followed by something
7- replace
    string.replace("string"|reg ex, "string");
    string.replace("string"|reg ex, "string");//global

 */
// let string = "hossam badr and his other name Hossam Bahr \n hossam";
// console.log(string.match(/hossam/gim));
// console.log(string.match("Hossam"));
// console.log(string.match(/Hossam/));
// console.log(string);
// new RegExp(string);
// let practice = "Os1 Os1Os Os2 Os8 Os8Os";
// let regEx = /Os[5-8]Os/g;
// console.log(practice.match(regEx));
// let myString = "AaBcdefG123!234%^&*";
// let atozSmall = /[a-z]/g;
// console.log(myString.match(atozSmall));
// let notAtozSmall = /[^a-z]/g;
// console.log(myString.match(notAtozSmall));
// let atozCapital = /[A-Z]/g;
// console.log(myString.match(atozCapital));
// let notAtozCapital = /[^A-Z]/g;
// console.log(myString.match(notAtozCapital));
// let ade = /[ade]/g;
// console.log(myString.match(ade));
// let allCapSmall_1 = /[a-z]/gi;
// console.log(myString.match(allCapSmall_1));
// let allCapSmall_2 = /[a-zA-Z]/g;
// console.log(myString.match(allCapSmall_2));
// let numsSpecials_1 = /[^a-zA-Z]/g;
// console.log(myString.match(numsSpecials_1));
// let numsSpecials_2 = /[^a-z]/gi;
// console.log(myString.match(numsSpecials_2));
// let spacialChar = /[^a-zA-Z0-9]/g;
// console.log(myString.match(spacialChar));
// let spacialChar1 = /[^a-z^A-Z0-9]/g;
// console.log(myString.match(spacialChar1));
// let email = "o@@@...com o@g.com o@g.net A@Y.com o-g.com o@s.org 1@1.com";
// let valid = /\w@\w.(com|.org)/gi;
// console.log(email.match(valid));
// let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed ASpamo";
// let valid1 = /(\bSpam|Spam\b)/ig;
// console.log(names.match(valid1));
// console.log(valid1.test(names));
// console.log(/(\bSpam|Spam\b)/ig.test(names));
// let mails = "o@nn.sa osama@gmail.com elzero@gmail.net hossam@mail.ru"; //all e-mails
// let valid2 = /\w+@\w+.\w+/ig;
// console.log(mails.match(valid2));
// let nums = "0110 10 150 05120 0560 350 00";//0 numbers or no_numbers 0
// let valid3 = /0(\d+)*0/ig;
// console.log(nums.match(valid3));
// let urls = "https://google.com http://www.website.net web.com";//all urls
// let valid4 = /(http(s)*:\/\/(www.)*)*\w+.\w+/ig;
// console.log(urls.match(valid4));
// let serials = "S100S S3000S S50000S S950000S";
// console.log(serials.match(/S\d{3}S/gi)); //S[three numbers]S
// console.log(serials.match(/S\d{4,5}S/gi)); //S[four or five numbers]S
// console.log(serials.match(/S\d{4,}S/gi)); //S[at least Four numbers]S
// let myString = "we love programming";
// let names = "10sanaZ 2AhmedZ 3Mohamed 4Mohamedz 4Moustafa 5GamalZ";
// //let valid5 = /^we/ig;
// console.log(/^we/ig.test(myString));
// console.log(/ing$/ig.test(myString));
// console.log(/^\d/ig.test(names));
// console.log(/lz$/ig.test(names));
// console.log(names.match(/\d+\w{5}z$/ig));
// console.log(names.match(/\d+\w{7,}(?=z)/ig));
// console.log(names.match(/\d+\w{8}(?!z)/ig));
let txt = "we love programming and @ because @ is amazing";
console.log(txt.replace("@", "javascript"));
console.log(txt.replaceAll("@", "javascript"));
console.log(txt.replace(/@/gi, "javascript"));
