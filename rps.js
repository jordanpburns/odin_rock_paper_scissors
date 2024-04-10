function getComputerChoice() {
    let num = Math.random() * 3;
    if (num < 1) {
        return 'Rock';
    } else if (num > 1 && num <= 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getPlayerChoice() { 
    let message = "Please enter 'Rock', 'Paper' or 'Scissors'.";
    let playerSelection = prompt(message);
    // if (!playerSelection) {
    //     playerSelection = getPlayerChoice(errorMessage);
    // }
    let possibleChoices = ['rock', 'paper', 'scissors'];
    playerSelection = playerSelection.toLowerCase();
    // if (!possibleChoices.includes(playerSelection)) {
    //     playerSelection = getPlayerChoice(errorMessage);
    // }
    let firstLetter = playerSelection.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    playerSelection = firstLetter + playerSelection.slice(1);
    return playerSelection;
}

function playSingleRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Rock') {
            return ['It\'s a tie!', 0, 0];
        } else if (computerSelection === 'Paper') {
        return [`You lose! ${computerSelection} beats ${playerSelection}`, 0, 1];
        } else if (computerSelection === 'Scissors') {
        return [`You win! ${playerSelection} beats ${computerSelection}`, 1, 0];
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return [`You win! ${playerSelection} beats ${computerSelection}`, 1, 0];
        } else if (computerSelection === 'Paper') {
            return ['It\'s a tie!', 0, 0];
        } else if (computerSelection === 'Scissors') {
            return [`You lose! ${computerSelection} beats ${playerSelection}`, 0, 1];
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
        return [`You lose! ${computerSelection} beats ${playerSelection}`, 0, 1];
        } else if (computerSelection === 'Paper') {
        return [`You win! ${playerSelection} beats ${computerSelection}`, 1, 0];
        } else if (computerSelection === 'Scissors') {
        return ['It\'s a tie!', 0, 0];
        }
    }  else {
        return
    }
}

function game() {
    playerSelection = getPlayerChoice();
    if (!playerSelection) {
        return;
    }
    computerSelection = getComputerChoice();
    console.log(`Player chose ${playerSelection} and Computer chose ${computerSelection}`)
    return playSingleRound(playerSelection, computerSelection);
}

let playerScore = 0;
let computerScore = 0;
let gameOver = false;
let numGames = 0;

while (!gameOver) {
    numGames += 1;
    if (numGames > 100) {
        break;
    }
    const results = game();
    let message = results[0];
    let playerScoreIncrememt = results[1];
    let computerScoreIncrement = results[2];
    playerScore += playerScoreIncrememt;
    computerScore += computerScoreIncrement;
    
    if (playerScore === 3 || computerScore === 3) {
        gameOver = true;
    }
    if (!gameOver) {
        console.log(`${message}. Current Score. You: ${playerScore}. Computer Score: ${computerScore}.`)
    } else {
        let winner;
        if (playerScore === 3) {
            winner = 'you are';
        } else {
            winner = 'the Computer is';
        }
        console.log(`The game has ended and ${winner} the winner!`);
    }
}

