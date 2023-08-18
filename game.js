const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

let canvaSize;
let elementSize;

function startGame() {
  const mapArr = maps[2].trim().replaceAll(" ", "").split("\n");

  for (let row = 0; row < mapArr.length; row++) {
    for (let col = 0; col < mapArr[row].length; col++) {
      game.fillText(
        emojis[mapArr[row][col]],
        elementSize * col,
        elementSize * row
      );
    }
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
