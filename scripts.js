function getComputerChoice() {
    const randomNumberFromZeroToTwo = Math.floor(Math.random() * 3);
    return ["Rock", "Paper", "Scissors"][randomNumberFromZeroToTwo];
}

function playRound(computerSelection) {
    const player = prompt("Choose rock, paper or scissors:").toLowerCase();
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
    for (let i = 0; i < 5; i++) {
        alert(playRound("Rock", getComputerChoice()));
    }
}

game();