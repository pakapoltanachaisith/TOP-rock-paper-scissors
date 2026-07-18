function getComputerChoice() {
  const pick = Math.floor(Math.random() * 3);

  if (pick === 0) {
    return "rock";
  }
  if (pick === 1) {
    return "paper";
  }

  return "scissors";
}

function getHumanChoice() {
  return prompt("Pick one: Rock, Paper, or Scissors");
}

function annouceScores(humanScore, computerScore) {
  console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let round = 1;

  function playRound() {
    const humanPick = getHumanChoice().toLowerCase();
    const computerChoice = getComputerChoice().toLowerCase();

    if (humanPick === "rock") {
      if (computerChoice === "rock") {
        console.log("Tie! Both players picked rock");
      }
      if (computerChoice === "paper") {
        computerScore += 1;
        console.log("Paper beats Rock. Computer Won!");
      } else {
        humanScore += 1;
        console.log("Rock beats Scissors. You Won!");
      }
    }

    if (humanPick === "paper") {
      if (computerChoice === "paper") {
        console.log("Tie! Both players picked Paper");
      }
      if (computerChoice === "scissors") {
        computerScore += 1;
        console.log("Scissors beats Paper. Computer Won!");
      } else {
        humanScore += 1;
        console.log("Paper beats Rock. You Won!");
      }
    }

    if (humanPick === "scissors") {
      if (computerChoice === "scissors") {
        console.log("Tie! Both players picked scissors");
      }
      if (computerChoice === "rock") {
        computerScore += 1;
        console.log("Rock beats Scissors. Computer Won!");
      } else {
        humanScore += 1;
        console.log("Scissors beats Paper. You Won!");
      }
    }
  }

  while (round <= 5) {
    playRound();
    annouceScores(humanScore, computerScore);
    round++;
  }
}

playGame();
