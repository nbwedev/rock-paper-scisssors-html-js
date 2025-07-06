// Returns players input
const getHumanChoice = () => {
  let humanChoice = prompt("Choose: rock, paper, scissors");
  return humanChoice.toLowerCase();
};

// Returns computer choice using rounded random numbers
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  let computerChoice =
    randomNumber === 0 ? "rock" : randomNumber === 1 ? "paper" : "scissors";

  return computerChoice;
};

// Game logic when playing 1 round
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === computerChoice) {
    return "Tie";
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    return `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    return `You lose! ${computerChoice} beats ${humanChoice}`;
  }
};
