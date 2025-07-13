// Cached DOM elements
// Appended corresponding HTML tags in when naming DOM Elements for easier debugging/tracking

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("human-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBaord_div = document.querySelector(".scoreboard");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

// Returns computer choice using rounded random numbers and its corresponding value based on ternary operator's argument.
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  return randomNumber === 0
    ? "rock"
    : randomNumber === 1
    ? "paper"
    : "scissors";
};
// console.log(getComputerChoice());

// Creates event listeners for rock, paper, scissors html tags
function main() {
  rock_div.addEventListener("click", () => game("rock"));
  paper_div.addEventListener("click", () => game("paper"));
  scissors_div.addEventListener("click", () => game("scissors"));
}
main();

// This functions is the game's core logic that determines winner in  Rock-Paper-Scissors.
// First, it takes the argument of userChoice to receive the player's actual choice from UI.
// Next, it compares userChoice and computerChoice and decide winner based on arguments provided.
// The winner is determined through switch-case statement.
function game(userChoice) {
  let computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win(userChoice, computerChoice);
      break;

    case "rockpaper":
    case "scissorsrock":
    case "paperscissors":
      lose(userChoice, computerChoice);
      break;

    case "rockrockk":
    case "paperpaer":
    case "scissorsscissors":
      draw(userChoice, computerChoice);
      break;
  }
}

// These functions handle score tracking and display messages based on round outcomes.
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${uppercase(userChoice)} beats ${uppercase(
    computerChoice
  )}! You win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${uppercase(computerChoice)} beats ${uppercase(
    userChoice
  )}! You lose!`;
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${uppercase(userChoice)} equals ${uppercase(
    computerChoice
  )}! Draw!`;
}

// This function converts the lowercase letters to uppercase letters then displays in on results.
function uppercase(choice) {
  if ((choice = "rock")) return "Rock";
  if ((choice = "paper")) return "Paper";
  return "Scissors";
}
