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

function getHumanChoice() { 
    let choice = prompt("Please select either r, p, or s."); 
    switch(choice) {
        case "r": 
            return "rock";
        case "p":
            return "paper";
        case "s":
            return "scissors";
        default: 
            return undefined;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound() { 
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(); 
    if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            console.log("WIN");
            humanScore++;
        } else if (computerChoice === "paper") {
            console.log("LOSE");
            computerScore++;
        } else {
            console.log("DRAW");
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            console.log("WIN");
            humanScore++;
        } else if (computerChoice === "scissors") {
            console.log("LOSE");
            computerScore++;
        } else {
            console.log("DRAW");
        }
    } else {
        if (computerChoice === "paper") {
            console.log("WIN");
            humanScore++;
        } else if (computerChoice === "rock") {
            console.log("LOSE");
            computerScore++;
        } else {
            console.log("DRAW");
        }
    }
    
}


// for (let i = 0; i < 100; i++) {
//     console.log(getComputerChoice());
// }