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
for (let i = 1; i<5; i+=1) {
    console.log(getComputerChoice())
}

