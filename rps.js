function getComputerChoice() {
    let num = Math.random() * 3;
    console.log(num)
    if (num < 1) {
        return 'Rock';
    } else if (num > 1 && num <= 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getUserChoice() {
    let message = "Please enter 'Rock', 'Paper' or 'Scissors'.";
    playerSelection = prompt(message);
    playerSelection = playerSelection.toLowerCase();
    firstLetter = playerSelection.slice(0,1);
    firstLetter = firstLetter.toUpperCase();
    playerSelection = firstLetter + playerSelection.slice(1);
    return playerSelection;
}


console.log(getUserChoice())


