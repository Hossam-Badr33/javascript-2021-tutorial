//window.localStorage.clear();
/*
##sessionStorage: in set & get like localStorage
 A-set key+value:
    window.sessionStorage.key_name = "key_value";
    window.sessionStorage["key_name"] = "key_value";
    window.sessionStorage.setItem("key_name", "key_value");
 B-get key
    window.sessionStorage.key_name;
    window.sessionStorage["key_name"];
    window.sessionStorage.getItem("key_name")
    window.sessionStorage.key(index);
 C-remove key
    window.sessionStorage.removeItem("key_name");
 D-clear() clear all sessionStorage keys+values
    window.sessionStorage.clear();
##but differ from localStorage in:
 1-new tab for example (open with liveserver) or (new same url)means new session and this tab nolonger contain data in sessionStorage.
 2-duplicate tab == copy sessionStorage
 */
let divLocal = document.querySelector(".localStorage"),
  divSession = document.querySelector(".sessionStorage"),
  input = document.querySelector("input");
window.localStorage.setItem("color", "red");
window.sessionStorage["color"] = "blue";
input.onblur = function () {
  console.log(input.value);
  window.localStorage.name = this.value; //here if u put user data in localStorage that make no-sense it's better to use sessionStorage
};
