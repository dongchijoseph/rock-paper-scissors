let playOption = ["rock", "paper", "scissors"];

function computerPlay() {
    return playOption[Math.floor(Math.random() * 3)];
}

function toCapital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    
    switch(true) {
        case playerSelectionLowerCase === "rock" && computerSelection === "paper":
        case playerSelectionLowerCase === "paper" && computerSelection === "scissors":
        case playerSelectionLowerCase === "scissors" && computerSelection === "rock":
            return `You Lose! ${toCapital(computerSelection)} beats ${toCapital(playerSelectionLowerCase)}`;
            break;
        
        case playerSelectionLowerCase === "paper" && computerSelection === "rock":
        case playerSelectionLowerCase === "scissors" && computerSelection === "paper":
        case playerSelectionLowerCase === "rock" && computerSelection === "scissors":
        return `You Win! ${toCapital(playerSelectionLowerCase)} beats ${toCapital(computerSelection)}`;
        break;

        case playerSelectionLowerCase !== "rock" && playerSelectionLowerCase !== "paper" && playerSelectionLowerCase !== "scissors":
            return `You have inputed: \"${playerSelection}\". You need to input rock, paper, or scissors.`;
            break;
        
        default:
            return "Draw! Let's play more";
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        let userInput = window.prompt("Welcome, please input rock, paper, or scissors", "rock");
        let result = playRound(userInput, computerPlay());
        if (result.indexOf("Win") === 4) {
            playerScore++;
            console.log(result);
        } else if (result.indexOf("Lose") === 4) {
            computerScore++;
            console.log(result);
        } else if (result.indexOf("!") === 4) {
            console.log(result);
        } else {
            console.log(result);
        }
        console.log(`You: ${playerScore} Computer: ${computerScore}`);
    }

    switch(true) {
        case playerScore > computerScore:
            console.log(`Final result: You win\nYou: ${playerScore} Computer: ${computerScore}`);
            break;
        case playerScore < computerScore:
            console.log(`Final result: You lose\nYou: ${playerScore} Computer: ${computerScore}`);
            break;
        default:
            console.log("Final result: Draw!");
    }
    

}

game();

