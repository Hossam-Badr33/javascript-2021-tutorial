console.log(this.history); //object
window.history.back(); //one-step back in history
window.history.forward(); //on-step forward in history
history.go(); //history.go(number) => 0(samr page), -1(1-step back) -2(2-steps-back) 1(1-step forward) 2(2-steps forward) so on
history.length; //all pages in history including current-page
