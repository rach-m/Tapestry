// variables
const squares = document.querySelectorAll(".square");
const board = document.querySelector(".wrapper");
const palette = document.querySelectorAll(".palette");
const button = document.querySelector(".check-answer");
let selectedColor;
let score = 0;
let timer;
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
//Click event for the color palette to select the color

palette.forEach(element => {
  element.addEventListener("click", function(event) {
    selectedColor = event.target.style.background;
    console.log(selectedColor);
    event.target.classList.add(`${selectedColor}`);
  });
});

//Click event for the board to deposit the chosen color on the board
squares.forEach(element => {
  element.addEventListener("click", function(event) {
    event.target.style.background = selectedColor;
    switch (selectedColor) {
      case "crimson":
        event.target.classList.toggle(".red");
        break;
      case "coral":
        event.target.classList.toggle(".orange");
        break;
      case "gold":
        event.target.classList.toggle(".yellow");
        break;
      case "lightgreen":
        event.target.classList.toggle(".lightgreen");
        break;
      case "darkgreen":
        event.target.classList.toggle(".darkgreen");
        break;
      case "cyan":
        event.target.classList.toggle(".lightblue");
        break;
      case "darkblue":
        event.target.classList.toggle(".darkblue");
        break;
      case "darkviolet":
        event.target.classList.toggle(".purple");
        break;
      case "deeppink":
        event.target.classList.toggle(".pink");
        break;
      default:
        break;
    }
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

// function getUserInput() {

//   }
// console.log(userInput);
// }

function compare() {
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] !== answerBoard[i]) {
      return alert("you lost!!!");
    } else {
      nextButton();
    }
  }
}
function nextLevel() {
  window.location = "levelthree.html";
}
function nextButton() {
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("NEXT LEVEL");
  btn.appendChild(t);
  document.body.appendChild(btn);
  btn.addEventListener("click", nextLevel);
}
function checkAnswer() {
  button.addEventListener("click", function() {
    squares.forEach(element => {
      userInput.push(element.style.background);
    });
    compare();
  });
}

generateRandomBoard();
setTimeout(setblankBoard, 5000);
// getUserInput();
checkAnswer();
