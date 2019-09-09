let computerSelection = computerPlay();
let playerSelection = prompt("Rock, paper or scissors?");
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie.")
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You win.");
    } else {
        console.log("You lose.");
    }
}

playRound(playerSelection, computerSelection);