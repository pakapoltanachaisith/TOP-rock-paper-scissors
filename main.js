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
