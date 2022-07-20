const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoice.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw! 🙂 ";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you lost 😭";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost 😭";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lost 😭";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you won 😊";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you won 😊";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you won 😊";
  }
  resultDisplay.innerHTML = result;
}
