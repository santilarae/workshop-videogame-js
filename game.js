const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

function startGame() {
    game.fillRect(0, 0, 100, 100);
    game.clearRect(0, 0, 100, 20);

  game.font = '16px Verdana, sans-serif' 
  game.textAlign = 'start'
  game.textBaseline = 'top'
  game.fillText("My Text", 0, 0);
}

window.addEventListener("load", startGame);
