const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvaSize;
let elementSize;

function startGame() {
  for (let i = 0; i < 10; i++) {
    game.fillText(emojis["X"], elementSize * i, 0);
  }
}

function setCanvasSize() {
  canvaSize =
    (window.innerWidth > window.innerHeight
      ? window.innerHeight
      : window.innerWidth) * 0.8;
  canvas.setAttribute("width", canvaSize);
  canvas.setAttribute("height", canvaSize);
  elementSize = canvaSize / 10;
  game.font = `${elementSize}px Verdana`;
  game.textAlign = "start";
  game.textBaseline = "top";
  startGame();
}

window.addEventListener("resize", setCanvasSize);
window.addEventListener("load", setCanvasSize);
