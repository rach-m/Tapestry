// variables
const squares = document.querySelectorAll(".square");
const board = document.querySelector(".wrapper");
const palette = document.querySelectorAll(".palette");
const button = document.querySelector('.check-answer');
const nextLevelButton = document.querySelector('.next-level');
const header = document.querySelector('header');
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


function compare() {
   for (let i = 0; i < userInput.length; i++) {
       if (userInput[i] !== answerBoard[i]) {
         return alert('you lost!!!');
  }
  else{
  return nextButton();
  }
}

}
function nextLevel() {
     window.location = "leveltwo.html";
   }
function nextButton() {
  nextLevelButton.classList.toggle('hidden');
  button.classList.toggle('hidden');
  // var btn = document.createElement("BUTTON");
  // var t = document.createTextNode("NEXT LEVEL");
  // btn.appendChild(t);
  // document.body.appendChild(btn);
  // btn.addEventListener('click', nextLevel);

}
function checkAnswer(){
 button.addEventListener("click", function() {
    squares.forEach(element => {
      userInput.push(element.style.background);
    });
     compare();

 });

}

//sourced from https://stackoverflow.com/questions/20618355/the-simplest-possible-javascript-countdown-timer
function startTimer(duration, display) {
    let timer = duration,
    minutes,
    seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
    }
  }, 1000);
}

function timerEnd() {
    if (display.textContent === '00:00') {
      alert("You lose! - Try Again!");
    }
  }
    display = document.querySelector("#time");

generateRandomBoard();
setTimeout(setblankBoard, 2000);
setTimeout(startTimer(45, display), 1000);
timerEnd();

// getUserInput();
checkAnswer();
