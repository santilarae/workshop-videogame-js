const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvaSize;
let elementSize;

function startGame() {
  const mapArr = maps[0].match(/[IXO\-]+/g).map((col) => col.split(""));
  mapArr.forEach((row, y) => {
    row.forEach((obj, x) => {
      game.fillText(emojis[obj], elementSize * x, elementSize * y);
    });
  });
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
