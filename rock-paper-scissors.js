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

for (let i = 0; i < 100; i++) {
    console.log(getComputerChoice());
}