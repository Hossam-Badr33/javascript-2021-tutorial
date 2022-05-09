/*tag.focus() || tag.blur() || tag.click() etc
 */
let nameInput = document.querySelector("[type='text']");
let ageInput = document.querySelector("[type='number']");
window.onload = function () {
  nameInput.focus();
};
ageInput.onblur = function () {
  document.links[0].click();
};
