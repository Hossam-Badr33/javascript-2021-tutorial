/*
location object:
    1-location.href --> get/set [URL || hash || file || mail]
 */
window.console.log("hossam");
this.console.log(location);
this.console.log(location.protocol); //http:
console.log(location.href); //http://127.0.0.1:5500/4-window%20location%20object/index.html
console.log(location.ancestorOrigins);
console.log(location.hash); //"" if page contain hash(#id-name) will apper
console.log(location.host); //127.0.0.1:5500 [host_name + port]
console.log(location.hostname); //127.0.0.1 [site_name]
console.log(location.origin); //http://127.0.0.1:5500
console.log(location.port); //5500
console.log(location.protocol); //http:
//location.protocol = "https"; -->set protocol
//console.log(location.protocol);
location.reload(); //reload current page
location.replace("https://google.com"); //location.replace("url"); note: new old url will removed from history by new replaced one
/* location.assign(
   "http://127.0.0.1:5500/4-window%20location%20object/index.html"
 );
 location.assign("url") --> will keep old url in history
*/
