let playerPoints = 0;
let computerPoints = 0;

// FUNCTION TO GET THE COMPUTER CHOICE 
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

// FUNCTION TO START A ROUND 
function playRound(playerSelection, computerSelection) {

    // GETTING THE UI BOARD TO DISPLAY THE COMPUTER CHOICE 
    const computerChoice = document.querySelector('#computer-choice-span');

    // GETTING THE UI BOARD TO DISPLAY THE PARCIAL RESULT 
    const parcialResult = document.querySelector('#parcial-result');

    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            computerChoice.textContent = '';
            computerChoice.textContent = `${computerSelection}`;
            parcialResult.textContent = "It's a tie!"
        } else if (computerSelection == "paper") {
            computerChoice.textContent = '';
            computerChoice.textContent = `${computerSelection}`;
            parcialResult.textContent = "You lose!"
            computerPoints++;
        } else {
            computerChoice.textContent = '';
            computerChoice.textContent = `${computerSelection}`;
            parcialResult.textContent = "You win!"
            playerPoints++;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerPoints++;
            computerChoice.textContent = '';
            computerChoice.textContent = `${computerSelection}`;
            parcialResult.textContent = "You win!";
        } else if (computerSelection == "paper") {
            computerChoice.textContent = '';
            computerChoice.textContent = `${computerSelection}`;
            parcialResult.textContent = "It's a tie!"
        } else {
            computerPoints++;
            computerChoice.textContent = '';
            computerChoice.textContent = `${computerSelection}`;
            parcialResult.textContent = "You lose!"
        }
    } else {
        if (computerSelection == "rock") {
            computerPoints++;
            computerChoice.textContent = '';
            computerChoice.textContent = `${computerSelection}`;
            parcialResult.textContent = "You lose!"
        } else if (computerSelection == "paper") {
            playerPoints++;
            computerChoice.textContent = '';
            computerChoice.textContent = `${computerSelection}`;
            parcialResult.textContent = "You win!";
        } else {
            computerChoice.textContent = '';
            computerChoice.textContent = `${computerSelection}`;
            parcialResult.textContent = "It's a tie!"
        }
    }
}

// FUNCTION TO CHECK IF THE GAME IS OVER 
function isGameOver(arg) {

    // GETTING THE UI BOARD TO DISPLAY THE FINAL RESULT 
    const result = document.querySelector('#result-message');
    const playerWinner = document.createElement('div');

    if (arg == 5) {
        if (playerPoints == computerPoints) {
            playerWinner.textContent = "It's a tie in this round!"
            result.appendChild(playerWinner);
        } else if (playerPoints < computerPoints) {
            playerWinner.textContent = "You lose this round!"
            result.appendChild(playerWinner);
        } else {
            playerWinner.textContent = "You win this round!"
            result.appendChild(playerWinner);
        }
    }
}

// FUNCTION TO RESET GAME
function resetGame() {

    // GETTING ALL THE INFORMATION THE NEED TO BE RESETED 
    const result = document.querySelector('#result-message');
    const playerBoardResult = document.querySelector('#playerPointsResult');
    const computerBoardResult = document.querySelector('#computerPointsResult');
    const computerChoice = document.querySelector('#computer-choice-span');
    const parcialResult = document.querySelector('#parcial-result');

    playerPoints = 0;
    computerPoints = 0;
    result.textContent = "";
    playerBoardResult.textContent = "";
    computerBoardResult.textContent = "";
    computerChoice.textContent = "";
    parcialResult.textContent = "";
}


// GAME FUNCTION 

function game() {

    let rodadas = 0;

    // GETTIN THE UI BOARD INFORMATION 
    const playerBoardResult = document.querySelector('#playerPointsResult');
    const computerBoardResult = document.querySelector('#computerPointsResult');

    // GETTIN THE BUTTONS 
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {

            // Getting computer and player choices
            const computerSelection = getComputerChoice();
            const playerSelection = e.target.alt;
            console.log(e.target.alt);


            // Initializing the round 
            console.log(playRound(playerSelection, computerSelection));


            // Showing the computer and player points in the board 
            playerBoardResult.textContent = `${playerPoints}`;
            computerBoardResult.textContent = `${computerPoints}`;
            console.log(playerPoints);
            console.log(computerPoints);
            rodadas++;


            // Checking if the round is over 
            isGameOver(rodadas);

            if (rodadas == 5) {
                rodadas = 0;
                playerPoints = 0;
                computerPoints = 0;

                const reset = document.querySelector('#reset-btn');
                reset.addEventListener('click', resetGame);
            }
        })
    })


};

game();