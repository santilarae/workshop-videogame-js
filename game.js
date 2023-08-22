const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");
const btnUp = document.querySelector("button#up");
const btnDown = document.querySelector("button#down");
const btnLeft = document.querySelector("button#left");
const btnRight = document.querySelector("button#right");

let canvaSize;
let elementSize;
let level = 0;
let lives = 3;

const playerPosition = {
  x: undefined,
  y: undefined,
};

const gifPosition = {
  x: undefined,
  y: undefined,
};

let enemyPositions = [];

function startGame() {
  const map = maps[level];

  if (!map) {
    gameWin();
    return;
  }

  const mapArr = map.match(/[IXO\-]+/g).map((col) => col.split(""));
  enemyPositions = [];
  game.clearRect(0, 0, canvaSize, canvaSize);
  mapArr.forEach((row, y) => {
    row.forEach((obj, x) => {
      const posiX = elementSize * x;
      const posiY = elementSize * y;
      game.fillText(emojis[obj], posiX, posiY);
      if (obj === "O") {
        playerPosition.x = playerPosition.x ?? x;
        playerPosition.y = playerPosition.y ?? y;
      } else if (obj === "I") {
        gifPosition.x = x;
        gifPosition.y = y;
      } else if (obj === "X") {
        enemyPositions.push({
          x,
          y,
        });
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

function levelWin() {
  level++;
  playerPosition.x = undefined;
  playerPosition.y = undefined;
  startGame();
}

function onEnemyCollision() {
  lives--;
  if (lives <= 0) {
    lives = 3;
    level = 0;
  }

  playerPosition.x = undefined;
  playerPosition.y = undefined;

  startGame();
}

function gameWin() {
  console.log("Ganaste");
}

function movePlayer() {
  const gifCollision =
    gifPosition.x === playerPosition.x && gifPosition.y === playerPosition.y;

  const enemyCollision = enemyPositions.some(
    (enemy) => enemy.x === playerPosition.x && enemy.y === playerPosition.y
  );

  if (gifCollision) {
    levelWin();
  }

  if (enemyCollision) {
    onEnemyCollision();
  }

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
