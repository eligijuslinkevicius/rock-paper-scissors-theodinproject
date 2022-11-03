function getComputerChoice() {
    const randomNumberFromZeroToTwo = Math.floor(Math.random() * 3);
    return ["Rock", "Paper", "Scissors"][randomNumberFromZeroToTwo];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    if ((player === "rock" && computerSelection === "Scissors") || (player === "scissors" && computerSelection === "Paper") || (player === "paper" && computerSelection === "Rock"))
        return "Player wins!";
    else if ((computerSelection === "Rock" && player === "scissors") || (computerSelection === "Scissors" && player === "paper") || (computerSelection === "Paper" && player === "rock"))
        return "Computer wins!";
    else
        return "Tie! Try again.";
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("Computer chose " + computerSelection);
console.log(playRound(playerSelection, computerSelection));