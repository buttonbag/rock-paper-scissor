const header = document.querySelector('.header');
const instructions = document.querySelector(
	'.instructions'
);
const message = document.querySelector('.message');
const rounds = document.querySelector('.rounds');
const userScore = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorBtn = document.querySelector('.scissorBtn');

function computerPlay() {
	// set array of rock, paper, scissor
	const choices = ['rock', 'paper', 'scissor'];

	// assign random number variable
	// randomly select rock, paper, scissor
	const randNum = Math.floor(Math.random() * 3);

	//assign selection to a variable
	let compPick = choices[randNum];
	return compPick;
}

// play a round with playerSelection vs computerSelection
function round(playerSelection, computerSelection) {
	// check for winner, playerSelection vs computerSelection

	// if computer chooses rock
	if (computerSelection === 'rock') {
		if (playerSelection === 'rock') {
			// return message string
			return `Tied. ${playerSelection} with ${computerSelection}`;
		} else if (playerSelection === 'paper') {
			// return message string
			++playerScore;
			return `You win! ${playerSelection} beats ${computerSelection}`;
		} else if (playerSelection === 'scissor') {
			// return message string
			++computerScore;
			return `You lose! ${computerSelection} beats ${playerSelection}`;
		}
	}
	// if computer chooses paper
	else if (computerSelection === 'paper') {
		if (playerSelection === 'rock') {
			// return message string
			++computerScore;
			return `You lose! ${computerSelection} beats ${playerSelection}`;
		} else if (playerSelection === 'paper') {
			// return message string
			return `Tied. ${playerSelection} with ${computerSelection}`;
		} else if (playerSelection === 'scissor') {
			// return message string
			++playerScore;
			return `You win! ${playerSelection} beats ${computerSelection}`;
		}
	}
	// if computer chooses scissor
	else if (computerSelection === 'scissor') {
		if (playerSelection === 'rock') {
			// return message string
			++playerScore;
			return `You win! ${playerSelection} beats ${computerSelection}`;
		} else if (playerSelection === 'paper') {
			// return message string
			++computerScore;
			return `You lose! ${computerSelection} beats ${playerSelection}`;
		} else if (playerSelection === 'scissor') {
			// return message string
			return `Tied. ${playerSelection} with ${computerSelection}`;
		}
	}
}

// keep score
var playerScore = 0;
var computerScore = 0;

function game(choice) {
	// players make a choice each time
	// const playerSelection = prompt(
	// 	'Choose rock, paper or scissor'
	// ).toLowerCase();
	const computerSelection = computerPlay();
	message.innerText = round(choice, computerSelection);
	userScore.innerText = `${playerScore}`;
	compScore.innerText = `${computerScore}`;
	// report a winner or loser at the end.
	if (playerScore > computerScore) {
		message.innerText += `You win, ${playerScore} to ${computerScore}`;
	} else if (playerScore < computerScore) {
		message.innerText += `You lose, ${computerScore} to ${playerScore}`;
	}
}

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
	btn.addEventListener('click', function () {
		game(this.name);
	});
});
