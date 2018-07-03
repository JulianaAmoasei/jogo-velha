var message = document.getElementById("message"); 
var tabuleiro = document.getElementById("tabuleiro"); 
var resetBtn = document.getElementById ("reset-btn"); 
var camposJogo = document.querySelectorAll("td"); 
var gameOver = false;
var jogadora = ""; 
var turno = "O"; 
var moves = 0;

tabuleiro.addEventListener("click", function(event) {
  if (event.target.matches("td") && !gameOver) {
    if (event.target.textContent === "") {
      if (turno === "X") {
        event.target.textContent = turno;
        turno = "O";
        jogadora = "X";
      } else {
        event.target.textContent = turno;
        turno = "X";
        jogadora = "O";
      }
      moves++;
      winner();
    }
  }
})

resetBtn.addEventListener("click", function() {
  gameOver = false;
  for (var i = 0; i < camposJogo.length; i++) {
    camposJogo[i].textContent = "";
    message.textContent = "";
  }
  turno = "O";
  jogadora = "";
  moves = 0;
})

function winner() {
  var position = [];
  for (var i = 0; i < camposJogo.length; i++) {
    position.push(camposJogo[i].textContent);
  }
  
  if (position[4] !== "") {
    if ((position[3] === position[4] && position[3] === position[5]) || (position[0] === position[4] && position[0] === position[8]) || (position[2] === position[4] && position[2] === position[6]) || (position[1] === position[4] && position[1] === position[7])) {
      message.textContent = "A jogadora " + jogadora + " venceu!";
      gameOver = true;
    }
  }
  if (position[0] !== "") {
    if ((position[0] === position[1] && position[0] === position[2]) || (position[0] === position[3] && position[0] === position[6])) {
      message.textContent = "A jogadora " + jogadora + " venceu!";
      gameOver = true;
    }
  }
  if (position[8] !== "") {
    if ((position[6] === position[7] && position[6] === position[8]) || (position[2] === position[5] && position[2] === position[8])) {
      message.textContent = "A jogadora " + jogadora + " venceu!";
      gameOver = true;
    }
  }
  if (moves === 9) {
    message.textContent = "Empatou!";
    gameOver = true;
  }
}