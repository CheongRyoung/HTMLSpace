const numberForm = document.querySelector("form");
const maxNum = document.querySelector("#maxNum");
const guessNum = document.querySelector("#guessNum");
const choseNum = document.querySelector("#choseNum");
const machineNum = document.querySelector("#machineNum");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS = "hidden";

function randomNumber(event) {
  event.preventDefault();
  choseNum.innerText = guessNum.value;
  machineNum.innerText = Math.ceil(Math.random() * maxNum.value - 1);
  if (choseNum.innerText === machineNum.innerText) {
    greeting.classList.remove(HIDDEN_CLASS);
  }
}

numberForm.addEventListener("submit", randomNumber);
