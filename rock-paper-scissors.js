let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rng = Math.floor(Math.random() * 3)
    switch(rng) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// function getHumanChoice() { 
//     let choice = prompt("Please select either r, p, or s."); 
//     switch(choice) {
//         case "r": 
//             return "rock";
//         case "p":
//             return "paper";
//         case "s":
//             return "scissors";
//         default: 
//             return undefined;
//     }
// }

function playRound(humanChoice, computerChoice) { 
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            alert("WIN");
            humanScore++;
        } else if (computerChoice === "paper") {
            alert("LOSE");
            computerScore++;
        } else {
            alert("DRAW");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            alert("WIN");
            humanScore++;
        } else if (computerChoice === "scissors") {
            alert("LOSE");
            computerScore++;
        } else {
            alert("DRAW");
        }
    } else {
        if (computerChoice === "paper") {
            alert("WIN");
            humanScore++;
        } else if (computerChoice === "rock") {
            alert("LOSE");
            computerScore++;
        } else {
            alert("DRAW");
        }
    }
}

function gameLoop(numRounds) {
    for (let i = 0; i < numRounds; i++) {
        playRound();
    }
    alert(`Final Score: ${humanScore} (you) v. ${computerScore} (CPU)`); 
    if (humanScore > computerScore) {
        alert("You WIN!"); 
    } else if (humanScore < computerScore) {
        alert("You LOSE :(");
    } else {
        alert("Draw...");
    }
}

const history = document.querySelector("ol") 
const humanScoreDisplayed = document.querySelector("#humanScore");
const computerScoreDisplayed = document.querySelector("#computerScore");

function logRound(playerChoice, computerChoice) {
    humanScoreDisplayed.textContent = humanScore;
    computerScoreDisplayed.textContent = computerScore;
    let round = document.createElement("li");
    round.textContent = "Player chose: " + playerChoice + ". Computer chose: " + computerChoice + ".";
    history.appendChild(round);
}

// gameLoop(5);

const rockButton = document.querySelector("#button"); 
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const buttons = document.querySelectorAll("button"); 
// for each takes in some function too. 
buttons.forEach((button) => {
    // addEventListener takes in a event and some function. 
    button.addEventListener("click", () => {
        let humanChoice = button.textContent;
        let computerChoice = getComputerChoice(); 
        playRound(humanChoice, computerChoice);
        logRound(humanChoice, computerChoice);
    })
});