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
        playRound("rock", getComputerChoice());
    }

    paperButton.onclick = function() {
        playRound("paper", getComputerChoice());
    }

    scissorsButton.onclick = function() {
        playRound("scissors", getComputerChoice());
    }
}

game();