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

for (let i = 0; i < 100; i++) {
    console.log(getComputerChoice());
}