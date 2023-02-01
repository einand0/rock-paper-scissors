let playerPoints = 0;
let computerPoints = 0;

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * (3 - 0) + 0);
    let computerChoice = "";

    if (randomIndex == 0) {
        computerChoice = "rock"
    } else if (randomIndex == 1) {
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {


    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            console.log(`User: ${playerSelection} | Computer: ${computerSelection} | Tie!`)
        } else if (computerSelection == "paper") {
            computerPoints++;
            console.log(`User: ${playerSelection} | Computer: ${computerSelection} | You lose!`)
        } else {
            playerPoints++;
            console.log(`User: ${playerSelection} | Computer: ${computerSelection} | You win!`)
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerPoints++;
            console.log(`User: ${playerSelection} | Computer: ${computerSelection} | You win!`)
        } else if (computerSelection == "paper") {
            console.log(`User: ${playerSelection} | Computer: ${computerSelection} | Tie!`)
        } else {
            computerPoints++;
            console.log(`User: ${playerSelection} | Computer: ${computerSelection} | You lose!!`)
        }
    } else {
        if (computerSelection == "rock") {
            computerPoints++;
            console.log(`User: ${playerSelection} | Computer: ${computerSelection} | You lose!`)
        } else if (computerSelection == "paper") {
            playerPoints++;
            console.log(`User: ${playerSelection} | Computer: ${computerSelection} | You win!!`)
        } else {
            console.log(`User: ${playerSelection} | Computer: ${computerSelection} | Tie!`)
        }
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper ou scissors?").toLowerCase();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(playerPoints);
    }

    if (playerPoints > computerPoints) {
        console.log("You win!");
    } else if(playerPoints < computerPoints) {
        console.log("You lose!");
    } else{
        console.log("It's a tie!")
    }
}


game();