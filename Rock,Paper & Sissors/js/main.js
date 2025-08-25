function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber < 1 / 3) return "rock";
  else if (randomNumber < 2 / 3) return "paper";
  else return "scissors";
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === computerMove) {
    result = "Tie.";
  } else if (
    (playerMove === "rock" && computerMove === "scissors") ||
    (playerMove === "paper" && computerMove === "rock") ||
    (playerMove === "scissors" && computerMove === "paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  document.getElementById("playerMove").textContent = `You picked: ${playerMove}`;
  document.getElementById("computerMove").textContent = `Computer picked: ${computerMove}`;
  document.getElementById("gameResult").textContent = result;
}
