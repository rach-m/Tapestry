// variables
const squares = document.querySelectorAll(".square");
const board = document.querySelector(".wrapper");
const palette = document.querySelectorAll(".palette");
const button = document.querySelector(".check-answer");
const nextLevelButton = document.querySelector(".next-level");
const header = document.querySelector("header");
let time = document.querySelector("#time");
let countdown = 90;
let selectedColor;
let score = 0;
let userInput = [];
let answerBoard = [];
let colors = [
  "crimson",
  "coral",
  "gold",
  "darkgreen",
  "cyan",
  "darkviolet",
  "deeppink"
];

//Toggle instuctions

//Click event for the color palette to select the color

palette.forEach(element => {
  element.addEventListener("click", function(event) {
    selectedColor = event.target.style.background;
    header.style.background = event.target.style.background;
    console.log(selectedColor);
    event.target.classList.add(`${selectedColor}`);
  });
});

//Click event for the board to deposit the chosen color on the board
squares.forEach(element => {
  element.addEventListener("click", function(event) {
    event.target.style.background = selectedColor;
  });
});

//generate random board

function generateRandomBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[Math.floor(Math.random() * 7)];
    answerBoard.push(squares[i].style.background);
  }
  return answerBoard;
}
//reset board for user input
function setblankBoard() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.background = "gray";
  }
}
//Checks the user input agianst the correct answer
function checkAnswer() {
  button.addEventListener("click", function() {
    squares.forEach(element => {
      userInput.push(element.style.background);
    });
    for (let i = 0; i < userInput.length; i++) {
      if (userInput[i] !== answerBoard[i]) {
        countdown = 0;
        alert("YOU LOST!! TRY AGAIN");
        return;
      } else {
        return nextButton();
      }
    }
  });
}

function nextButton() {
  nextLevelButton.classList.toggle("hidden");
  button.classList.add("hidden");
}

//sourced from https://git.generalassemb.ly/jesababon/classdash/blob/master/script.js
function startClock() {
  let interval = setInterval(function timer() {
    if (countdown !== 0) {
      countdown--;
      time.textContent = `${countdown}`;
    } else {
      alert("YOU LOST!! TRY AGAIN");
      time.classList.toggle("hidden");
      countdown = null;
      return;
    }
  }, 1000);
}

generateRandomBoard();
setTimeout(setblankBoard, 2000);
setTimeout(startClock(), 7000);
checkAnswer();
