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

// Game logic when playing a whole match
const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    const result = playRound(human, computer);
    console.log(result);

    if (result.startsWith("You win")) {
      humanScore++;
    } else if (result.startsWith("You lose")) {
      computerScore++;
    }
  }
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
};

playGame();
