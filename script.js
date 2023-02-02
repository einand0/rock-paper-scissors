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

    const computerChoice = document.querySelector('#computer-choice-span');
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

function isGameOver(arg){
    const result = document.querySelector('#result-message');
    const playerWinner = document.createElement('div');

    if(arg == 5){
        if(playerPoints == computerPoints){
            playerWinner.textContent = "A rodada empatou!"
            result.appendChild(playerWinner);
        } else if(playerPoints < computerPoints){
            playerWinner.textContent = "Você perdeu a rodada!"
            result.appendChild(playerWinner);
        } else{
            playerWinner.textContent = "Você ganhou a rodada!"
            result.appendChild(playerWinner);
        }
    }
}


function resetGame(){
    playerPoints = 0;
    computerPoints = 0;
    const result = document.querySelector('#result-message');
    result.textContent = "";
    const playerBoardResult = document.querySelector('#playerPointsResult');
    const computerBoardResult = document.querySelector('#computerPointsResult');
    playerBoardResult.textContent = "";
    computerBoardResult.textContent = "";
    const computerChoice = document.querySelector('#computer-choice-span');
    computerChoice.textContent = "";
    const parcialResult = document.querySelector('#parcial-result');
    parcialResult.textContent = "";
}


function game() {

    const playerBoardResult = document.querySelector('#playerPointsResult');
    const computerBoardResult = document.querySelector('#computerPointsResult');
    
    const buttons = document.querySelectorAll('button');

    let rodadas = 0;


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

                if(rodadas == 5){
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