let playerScore = 0;
let computerScore = 0;

const buttonsContainer = document.querySelector("#buttonsContainer");
const messageDiv = document.querySelector("#message");
const scoreDiv = document.querySelector("#score");
const body = document.querySelector("body");

scoreDiv.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`

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
    messageDiv.textContent = `You chose ${moves[playerSelection]} and computer chose ${moves[computerSelection]}. ${resultString}`;
    scoreDiv.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`

    if (playerScore == 5) {
        messageDiv.textContent = "You won!!";
        gameOver();

    } else if (computerScore == 5) {
        messageDiv.textContent = "The Computer won!"
        gameOver();
    }
}

function gameOver() {
    document.querySelectorAll('#buttonsContainer button').forEach(elem => {
        elem.disabled = true;
      });
    const playAgainButton = document.createElement("button");
    playAgainButton.textContent = "Play Again";
    body.appendChild(playAgainButton);
    
    // start new game
    playAgainButton.addEventListener("click", () => {
        body.removeChild(playAgainButton);

        document.querySelectorAll('#buttonsContainer button').forEach(elem => {
            elem.disabled = false;
        });
        
        playerScore = 0;
        computerScore = 0;
        scoreDiv.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`
    })
}

buttonsContainer.addEventListener("click", (event) => {
    let target = event.target;
    let computerSelection = getComputerChoice();
    let playerSelection;

    switch(target.id) {
        case "rock":
            playerSelection = "rock";
            playRound(playerSelection, computerSelection);
            break;
        case "paper":
            playerSelection = "paper";
            playRound(playerSelection, computerSelection);
            break;
        case "scissors":
            playerSelection = "scissors";
            playRound(playerSelection, computerSelection);
            break;
    }
})
