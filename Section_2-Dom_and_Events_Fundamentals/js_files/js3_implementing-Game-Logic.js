"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
});

document.querySelector(".check").addEventListener("click", function () {
  const inputedValue = Number(document.querySelector(".guess").value);

  let gosterilenMesaj = function (message) {
    document.querySelector(".message").textContent = message;
  };

  if (!inputedValue) {
    document.querySelector(".message").textContent =
      "this is not a valid number";
  } else if (inputedValue === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent = "correct number";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    } else {
    }
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
  } else if (inputedValue !== secretNumber) {
    if (score > 1) {
      gosterilenMesaj(inputedValue > secretNumber ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      gosterilenMesaj("You have lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// else if (inputedValue > secretNumber) {
// if (score > 1) {
//   document.querySelector(".message").textContent = "too high";
//   score--;
//   document.querySelector(".score").textContent = score;
// } else {
//   document.querySelector(".message").textContent =
//     "💥 You have lost the game";
//   document.querySelector(".score").textContent = 0;
// }
// }
// else if (inputedValue < secretNumber) {
// if (score > 1) {
//   document.querySelector(".message").textContent = "too low";
//   score--;
//   document.querySelector(".score").textContent = score;
// } else {
//   document.querySelector(".message").textContent =
//     "💥 You have lost the game";
//   document.querySelector(".score").textContent = 0;
// }
// }

// ! This is the long way of doing code work. But it is struggling and has too much unnecessary repetition. So we should make short our code as much as possible. This is calling "Dry Code Principle".
