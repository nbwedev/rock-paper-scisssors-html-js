// Caching DOM elements
// Appended corresponding HTML tags in DOM elements naming convention for easier debugging/tracing

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("human-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBaord_div = document.querySelector(".scoreboard");

const result_div = document.querySelector(".result");

const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
