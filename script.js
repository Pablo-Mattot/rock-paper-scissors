let playerScore = 0;
let computerScore = 0;
let roundPlayed = 0;
const scoreBoardPlayer = document.querySelector("#playerScore");
let scorePlayerDefault = 0;
const scoreBoardComputer = document.querySelector("#computerScore");
let scoreComputerDefault = 0;

//Generate random computer input
function getComputerInput() {
    const selections = ["rock", "paper", "scissors"];
    const randomSelections = selections[Math.floor(Math.random()*selections.length)];
    return randomSelections;
}

//Get the player's input
function getUserInput() {
    let userInput = prompt("Rock, paper or scissors?").toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        alert("Invalid input. Try again.");
        getUserInput();
    }
}

//Compare both inputs, decide winner of round and distribute points
function compareInput(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie.");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("You win.");
        roundPlayed++;        
        playerScore++;
    } else {
        console.log("You lose.");
        roundPlayed++;
        computerScore++;
    }
}

function roundWinner() {
    if (playerScore > computerScore) {
        scorePlayerDefault++;
        scoreBoardPlayer.innerHTML = scorePlayerDefault;
    } else {
        scoreComputerDefault++;
        scoreBoardComputer.innerHTML = scoreComputerDefault;
    }
}

//Start game
function game() {
    roundPlayed = 0;
    while (roundPlayed < 5) {
        compareInput(getUserInput(), getComputerInput());
    }
    roundWinner();
}

//Reset game and scores
function reset() {
    roundPlayed = 0;
    playerScore = 0;
    scoreBoardPlayer.innerHTML = playerScore;
    computerScore = 0;
    scoreBoardComputer.innerHTML = computerScore;
}