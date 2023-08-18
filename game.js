const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

function startGame() {
  let canvaSize =
    (window.innerWidth > window.innerHeight
      ? window.innerHeight
      : window.innerWidth) * 0.8;
  canvas.setAttribute("width", canvaSize);
  canvas.setAttribute("height", canvaSize);
  const elementsSize = canvaSize / 10;
  game.textAlign = "left";
  game.textBaseline = "top";
  game.font = `${elementsSize}px Verdana`;
  for (let i = 0; i < 10; i++) {
    game.fillText(emojis["X"], elementsSize * i, 0);
  }
}

window.addEventListener("load", startGame);
