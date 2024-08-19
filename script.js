function getComputerChoice() {
    const choice = ["rock", "paper", "scissor"];
    return choice[Math.floor(Math.random() * 3)]
}

function getHumanChoice() {
    let choose = prompt("Choose:Rock, Paper, Scissor");
    return choose.toLocaleLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice=== "rock" && computerChoice === "scissor") {
        humanScore++;
        console.log("You win! Rock beats scissor");
    } else if (humanChoice=== "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win! Paper beats Rock");
    } else if (humanChoice=== "scissor" && computerChoice === "paper") {
        humanScore++;
        console.log("You win! Scissor beats paper");
    } else if (computerChoice=== "rock" && humanChoice === "scissor") {
        computerScore++;
        console.log("You lose! Rock beats Scissor");
    }
    else if (computerChoice=== "paper" && humanChoice === "rock") {
        computerScore++;
        console.log("You lose! Paper beats Rock");
    }
    else if (computerChoice=== "scissor" && humanChoice === "paper") {
        computerScore++;
        console.log("You lose! Scissor beats Paper");
    } else if (humanChoice=== computerChoice) {
        console.log("It's a tie!!");
    } else {
        console.log("Invalid choice. Please select rock, paper, or scissor.");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame(){
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Score of human is: ${humanScore}`);
    console.log(`Score of computer is: ${computerScore}`);
}

playGame();
