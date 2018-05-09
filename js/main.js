// variables
const squares = document.querySelectorAll(".square");
const board = document.querySelector(".wrapper");
const palette = document.querySelectorAll(".palette");
let selectedColor;
let score = 0;
let timer;
let squareNumber = -1;
// const checkBoard = [
//   [[0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8]],
//   [[1, 0], [1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8]],
//   [[2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8]],
//   [[3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7], [3, 8]],
//   [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8]],
//   [[5, 0], [5, 1], [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8]],
//   [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8]],
//   [[7, 0], [7, 1], [7, 2], [7, 3], [7, 4], [7, 5], [7, 6], [7, 7], [7, 8]],
//   [[8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8]],
//   [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
//   [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
//   [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
//   [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
//   [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
//   [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
//   [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
//   [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
//   [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]]
// ];

const checkBoard = [
  ["s0", "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"],
  ["s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17"],
  ["s18", "s19", "s20", "s21", "s22", "s23", "s24", "s25", "s26"],
  ["s27", "s28", "s29", "s30", "s31", "s32", "s33", "s34", "s35"],
  ["s36", "s37", "s38", "s39", "s40", "s41", "s42", "s43", "s44"],
  ["s45", "s46", "s47", "s48", "s49", "s50", "s51", "s52", "s53"],
  ["s54", "s55", "s56", "s57", "s58", "s59", "s60", "s61", "s62"],
  ["s63", "s64", "s65", "s66", "s67", "s68", "s69", "s70", "s71"],
  ["s72", "s73", "s74", "s75", "s76", "s77", "s78", "s79", "s80"]
];
let squarePosition = [];
let numSquarePosition;
let split;
let y;
let x;
let positions = [];


// functions
//turn data position  into array logic


// colorCheck();

// function check() {
//     // var boardArray = checkBoard.map(function(item){ return checkBoard[item].style.background; });
//     var isDuplicate = boardArray.some(function(item, idx){
//     return boardArray.indexOf(item) != idx ;
// });
// console.log(isDuplicate);
// }

// check();

function getPosition() {
  squares.forEach(element => {
    dataPosition = element.getAttribute("data-position").split(",");
    squarePosition.push(dataPosition);
    for (let i = 0; i < squarePosition.length; i++) {
      y = Number(squarePosition[i][0]);
      x = Number(squarePosition[i][1]);
    }
    squareNumber++;
    positions.push({ y: y, x: x, squareNumber: `s${squareNumber}` });
    return positions;
  });
}

getPosition();

// function validateBoard() {
//   checkBoard.forEach( => {
//   if (positions === 23) {
//     frfr
//   })
// }}

// validateBoard();

// events

//Click event for the color palette to select the color

palette.forEach(element => {
  element.addEventListener("click", function(event) {
    selectedColor = event.target.style.background;
    console.log(selectedColor);
    event.target.classList.add(selectedColor);

  });
});

//Click event for the board to deposit the chosen color on the board
squares.forEach(element => {
  element.addEventListener("click", function() {
    event.target.style.background = selectedColor;
    console.log();
  });
});

//starter boards
