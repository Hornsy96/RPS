function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) + 1;
      if (random === 1) {
        answer = 'rock';
    } else if (random === 2) {
        answer = 'paper';
    } else {
        answer = 'scissors'
    }    
    return answer;
}

const computerChoice = getComputerChoice();
console.log(computerChoice)

function playGame(playerSelection, computerSelection) {
    const userInput = prompt('Which will you throw?');
    playerSelection = userInput.toLowerCase();

    computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You Lose! Paper beats rock"
        
    }
    
}

const result = playGame('rock', 'paper');