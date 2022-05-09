let newWindow = window.open(
  "https://google.com",
  "_blank",
  "width:400, height:400"
);
newWindow.focus(); //to focus on newWindow
window.close(); //to close original window from open()
document.body.style.cssText = "height:2000px;width:3000px;";
window.scrollTo(600, 400); //to move scroll from x, y scrollTo(x[num], y[num]) even if you write this code several times start from x=0 =>600, y=0 =>400 || window.scrollTo({top:num, left:num, behavior:"smooth"/"auto"[def]})
window.scroll(600, 400); //same result like scrollTo
window.scrollBy(200, 200); //to move regarding of final scroll/position x=last_scroll +200  y=final_scroll + 200
window.print();
window.stop(); //to stop download methods in page
