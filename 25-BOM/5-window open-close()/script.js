/*
window.open("url", "_blank[def]/_self", "features=>width=nunber, height=number, top=number, left=number")
 */
window.setTimeout(function () {
  window.open(
    "https://google.com",
    "_blank",
    "width=800, height=300, top=100, left=200"
  );
}, 3000);
window.close(); //only close window opened with window.open()
