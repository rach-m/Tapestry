// variables
const squares = document.querySelectorAll(".square");
const board = document.querySelector(".wrapper");
const palette = document.querySelectorAll(".palette");
let selectedColor;
let score;
let timer;

// functions

// events

palette.forEach(element => {
  element.addEventListener("click", function(event) {
    selectedColor = event.target.style.background;
    console.log(selectedColor);
  });
});

squares.forEach(element => {
  element.addEventListener("click", function() {
    event.target.style.background = selectedColor;
  });
});
