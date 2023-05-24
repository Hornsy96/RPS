/* Logic to randomise the computers choice */
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
/*console.log(computerChoice)*/


/* This is the basic game logic */
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
    
/* This is the function to play the game, using a loop to play bets of 5*/       
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++){
        const result = playGame();
        console.log(result);

        if (result.includes('Win')) {
            playerScore++;  
        } else if (result.includes('Lose'))
            computerScore++;
        }

    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (playerScore > computerScore) {
        return 'You win!'
    } else if (computerScore > playerScore) {
        return 'You lose!'
    } else {
        return 'Tie game..'
    }

    }

    console.log(game());