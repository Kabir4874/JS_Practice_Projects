const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const btn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;
const winningPosition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function initGame() {
  currentPlayer = "X";
  gameGrid = ["", "", "", "", "", "", "", "", ""];
  btn.classList.remove("active");
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}
initGame();

function handleClick(index) {
  if (gameGrid[index] == "") {
    boxes[index].innerHTML = currentPlayer;
    gameGrid[index] = currentPlayer;
    swapTurn();
    checkGameOver();
  }
}

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    handleClick(index);
  });
});
