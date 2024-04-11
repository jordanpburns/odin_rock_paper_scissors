function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}
function playRound(playerSelection, computerSelection) {
    const moves = ["rock", "paper", "scissors"];
    let resultString;
    playerSelection = playerSelection.toLowerCase();
    if (!moves.includes(playerSelection)) {
        //Error
        return;
    }
    playerSelection = moves.indexOf(playerSelection)

    if ((playerSelection + 1) % 3 == computerSelection) {
        resultString = "The computer wins this round!";
        computerScore += 1
    } else if ((computerSelection + 1) % 3 == playerSelection) {
        resultString = "You win this round!";
        playerScore += 1
    } else if (computerSelection == playerSelection) {
        resultString = "It's a tie!"
    } else {
        resultString = "Error, nobody wins!"
    }
    console.log(resultString)
    return resultString;
}

function playGame() {
    for (i = 0; i < 5; i = i + 1) {
        playerSelection = prompt("Please choose rock, paper or scissors.")
        computerSelection = getComputerChoice()
        playRound(playerSelection, computerSelection)
    }
}
let playerScore = 0
let computerScore = 0
playGame()
if (playerScore > computerScore) {
    console.log("You win the whole game!")
} else if (computerScore > playerScore) {
    console.log("The computer wins the whole game!")
} else if (computerScore == playerScore) {
   console.log("The game is a tie!")
} else {
    console.log("Error, nobody wins!")
}