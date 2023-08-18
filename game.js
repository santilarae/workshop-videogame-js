const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("button#up");
const btnDown = document.querySelector("button#down");
const btnLeft = document.querySelector("button#left");
const btnRight = document.querySelector("button#right");

let canvaSize;
let elementSize;

const moveUp = () => console.log("Arriba");
const moveDown = () => console.log("Abajo");
const moveLeft = () => console.log("Izquierda");
const moveRight = () => console.log("Derecha");

const moveByKey = (e) => {
  if (e.key === "ArrowUp") moveUp();
  if (e.key === "ArrowDown") moveDown();
  if (e.key === "ArrowLeft") moveLeft();
  if (e.key === "ArrowRight") moveRight();
};

btnUp.addEventListener("click", moveUp);
btnDown.addEventListener("click", moveDown);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("keyup", moveByKey);

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
