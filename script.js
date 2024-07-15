const choice = ["rock", "papper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const settingsShow = document.getElementById("How-Play");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const drawScoreDisplay = document.getElementById("drawScoreDisplay");
const reStartbutton = document.getElementById("reStart-button")
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function PlayGame(playerChoice) {

   
    const computerChoice = choice[Math.floor(Math.random() * 3 )]
    let result = "";

    if (playerChoice === computerChoice) {
        result = "DRAW!";
    }
    else{
        switch (playerChoice) {
            case "rock":
              result =  (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!" 
                break;
            case "papper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!" 
                    break;
            case "scissors":
                result = (computerChoice === "papper") ? "YOU WIN!" : "YOU LOSE!" 
                  break;
        }
    }

    resultDisplay.textContent = result;

    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            resultDisplay.classList.remove("redText" , "blackText")
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            resultDisplay.classList.remove("greenText" , "blackText")
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
                break;
        case "DRAW!":
                drawScore++;
                drawScoreDisplay.textContent = drawScore;
                resultDisplay.classList.add("blackText")
                resultDisplay.classList.remove("redText" , "greenText")
                break;
    }

    switch (playerChoice) {
        case "rock":
             playerDisplay.src = "rock-icon.png"
            break;
        case "papper":
                playerDisplay.src = "papper-icon.png"
               break;
        case "scissors":
                playerDisplay.src = "scissor-icon.jpeg"
               break;
    }

    
    switch (computerChoice) {
        case "rock":
            computerDisplay.src = "rock-icon.png"
            break;
        case "papper":
            computerDisplay.src = "papper-icon.png"
                break;
        case "scissors":
            computerDisplay.src = "scissor-icon.jpeg"
             break;
    }
}

function resetGame() {
    resultDisplay.textContent = "";
    computerScoreDisplay.textContent = computerScore = 0;
    playerScoreDisplay.textContent = playerScore = 0;
    drawScoreDisplay.textContent = drawScore = 0; 
}


