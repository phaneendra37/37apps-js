"use strict";
// Declaring the elements
let highscroe = document.querySelector("#highscore");
let score = document.querySelector("#score");
let userInput = document.querySelector("#gussed");
let secretNumber = document.querySelector("#actualMember");
let bgcolor = document.querySelector("#card");
let message = document.querySelector("#Message");
let notice = document.querySelector("#gameover");
let success_message = document.querySelector("#successMessage");
let highscorecontent = document.querySelector("#highscorecontent");
let newscore = document.querySelector("scoretext");

this.InitialValues();
// Setting the initial Values
function InitialValues() {
  let storeagein = localStorage.getItem("highscore");
  if (storeagein) {
    highscorecontent.style.display = "block";
    highscroe.textContent = storeagein;
  } else {
    highscorecontent.style.display = "none";
  }
  message.textContent = "Start guessing";
  notice.style.display = "none";
  success_message.style.display = "none";
  SetBodybackground("#fff");
  score.textContent = 4;
  userInput.value = null;
  secretNumber.textContent = GenerateSecretNumber();
}
function GenerateSecretNumber() {
  let numb = Math.floor(Math.random() * 20) + 1;
  return numb;
}
function SetBodybackground(color) {
  bgcolor.style.backgroundColor = color;
}
function CheckNumber(e) {
  e.preventDefault();
  if (score.textContent == 1 || score.textContent == "1") {
    notice.style.display = "block";
    score.textContent--;
  } else {
    if (userInput.value == secretNumber.textContent) {
      success_message.style.display = "block";
      SetBodybackground("#bbffbb");
      if (Number(highscroe.textContent) < Number(score.textContent)) {
        highscorecontent.style.display = "block";
        localStorage.setItem("highscore", score.textContent);
        highscroe.textContent = score.textContent;
      }
    } else if (Number(userInput.value) > Number(secretNumber.textContent)) {
      score.textContent--;
      message.textContent = "📈 Number is too high!";
      SetBodybackground("#ffcfbb");
    } else {
      score.textContent--;
      message.textContent = "📉 Number is too low!";
      SetBodybackground("#ffe6bb");
    }
  }
  userInput.focus();
  return false;
}
