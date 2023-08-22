const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("button#up");
const btnDown = document.querySelector("button#down");
const btnLeft = document.querySelector("button#left");
const btnRight = document.querySelector("button#right");

let canvaSize;
let elementSize;

const playerPosition = {
  x: undefined,
  y: undefined,
};

function startGame() {
  const mapArr = maps[0].match(/[IXO\-]+/g).map((col) => col.split(""));
  game.clearRect(0, 0, canvaSize, canvaSize);
  mapArr.forEach((row, y) => {
    row.forEach((obj, x) => {
      const posiX = elementSize * x;
      const posiY = elementSize * y;
      game.fillText(emojis[obj], posiX, posiY);
      if (obj === "O") {
        playerPosition.x = playerPosition.x ?? x;
        playerPosition.y = playerPosition.y ?? y;
      }
      if (obj === "I") {
        if(y === playerPosition.y &&  x === playerPosition.x){
          console.log('win')
        }
      }
      if (obj === "X") {
        if(y === playerPosition.y &&  x === playerPosition.x){
          console.log('colision')
        }
      }

    });
  });
  movePlayer();
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

function movePlayer() {
  game.fillText(
    emojis["PLAYER"],
    elementSize * playerPosition.x,
    elementSize * playerPosition.y
  );
}

function moveUp() {
  if (playerPosition.y > 0) {
    playerPosition.y -= 1;
    startGame();
  }
}
function moveDown() {
  if (playerPosition.y < 9) {
    playerPosition.y += 1;
    startGame();
  }
}
function moveLeft() {
  if (playerPosition.x > 0) {
    playerPosition.x -= 1;
    startGame();
  }
}
function moveRight() {
  if (playerPosition.x < 9) {
    playerPosition.x += 1;
    startGame();
  }
}

function moveByKey(e) {
  if (e.key === "ArrowUp") moveUp();
  if (e.key === "ArrowDown") moveDown();
  if (e.key === "ArrowLeft") moveLeft();
  if (e.key === "ArrowRight") moveRight();
}

window.addEventListener("resize", setCanvasSize);
window.addEventListener("load", setCanvasSize);
btnUp.addEventListener("click", moveUp);
btnDown.addEventListener("click", moveDown);
btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);
window.addEventListener("keyup", moveByKey);
