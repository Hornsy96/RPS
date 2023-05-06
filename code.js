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
        return "You Lose! Paper beats rock";
        } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Win! Rock beats scissors";
        } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win! Paper beats rock";
        } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You Lose! Scissors beats paper";
        } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You Lose! Rock beats scissors";
        } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You Win! Scissors beats paper";
        } else {
        return "It's a tie!";
        }  
    }
    
        


const result = playGame('rock', 'paper');

console.log(result);