let playerCount = 0;
let computerCount = 0;

function getComputerChoice() {
    const randomNumberFromZeroToTwo = Math.floor(Math.random() * 3);
    return ["Rock", "Paper", "Scissors"][randomNumberFromZeroToTwo];
}

function playRound(player, computerSelection) {
    if (player === "")
        alert("Invalid input. Choose rock, paper or scissors!");
    else {
        if ((player === "rock" && computerSelection === "Scissors") || (player === "scissors" && computerSelection === "Paper") || (player === "paper" && computerSelection === "Rock"))
            return "Player wins!";
        else if ((computerSelection === "Rock" && player === "scissors") || (computerSelection === "Scissors" && player === "paper") || (computerSelection === "Paper" && player === "rock"))
            return "Computer wins!";
        else
            return "Tie! Try again.";
    }
}

function game() {
    const rockButton = document.getElementById("rock-button");
    const paperButton = document.getElementById("paper-button");
    const scissorsButton = document.getElementById("scissors-button");

    rockButton.onclick = function() {
        updateResults(playRound("rock", getComputerChoice()));
    }

    paperButton.onclick = function() {
        updateResults(playRound("paper", getComputerChoice()));
    }

    scissorsButton.onclick = function() {
        updateResults(playRound("scissors", getComputerChoice()));
    }
}
let player = 0;
let computer = 0;
function updateResults(result) {
    const playerResults = document.getElementById("player-results");
    const computerResults = document.getElementById("computer-results");
    const results = document.getElementById("results");
    const tieStatus = document.getElementById("tie");

    switch (result) {
        case "Player wins!":
            player += 1;
            playerResults.innerHTML = `Player: ${player}`;
            tieStatus.innerHTML = "";
            break;
        case "Computer wins!":
            computer += 1;
            computerResults.innerHTML = `Computer: ${computer}`;
            tieStatus.innerHTML = "";
            break;
        case "Tie! Try again.":
            tieStatus.innerHTML = "Tie! Try again."
            break;
    }

    if (player === 5) {
        player = 0;
        computer = 0;
        results.innerHTML = "Player won!"
    } else if (computer === 5) {
        player = 0;
        computer = 0;
        results.innerHTML = "Computer won!"
    }

}

game();