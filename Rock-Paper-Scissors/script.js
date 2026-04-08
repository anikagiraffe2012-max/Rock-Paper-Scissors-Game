const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerChoiceSpan = document.getElementById('playerChoice');
const computerChoiceSpan = document.getElementById('computerChoice');
const resultSpan = document.getElementById('result');
const playerScoreSpan = document.getElementById('playerScore');
const computerScoreSpan = document.getElementById('computerScore');

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(player,computer) {
    if (player === computer) {
        return 'tie';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);

    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;

    if (winner === 'player') {
        playerScore++;
        resultSpan.textContent = 'You win!🎉';
    } else if (winner === 'computer') {
        computerScore++;
        resultSpan.textContent = 'Computer wins 😢';
    } else {
        resultSpan.textContent = "It's a tie! 🤝";
    }

    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;
}

rockBtn.addEventListener('click', () => {
    playGame('rock');
});
paperBtn.addEventListener('click', () => {
    playGame('paper');
});
scissorsBtn.addEventListener('click', () => {
    playGame('scissors');
});