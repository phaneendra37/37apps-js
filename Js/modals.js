"use strict";
let btn = document.querySelector(".btn-primary");
let modal = document.querySelector(".modal-backdrop");
function ShowModal() {
  console.log("test");
  document.querySelector(".phani-modals").style.display = "block";
}
function HideModal() {
  console.log("test");
  document.querySelector(".phani-modals").style.display = "none";
}
btn.addEventListener("click", this.ShowModal);
modal.addEventListener("click", this.HideModal);
document.addEventListener("keyup", function (EVENT) {
  console.log(EVENT.key);
  if (EVENT.key === "Escape") HideModal();
});
