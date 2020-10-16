const header = document.querySelector('.header');
const instructions = document.querySelector(
	'.instructions'
);
const message = document.querySelector('.message');
const endMessage = document.querySelector('.end-message');
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
const roundsAmt = document.querySelector('#roundsAmt');

function game(choice) {
	// players make a choice each time
	const computerSelection = computerPlay();
	message.innerText = round(choice, computerSelection);
	userScore.innerText = `${playerScore}`;
	compScore.innerText = `${computerScore}`;
	// check if max points are reached
	if (
		playerScore + computerScore ===
		parseInt(roundsAmt.value)
	) {
		// report a winner or loser at the end.
		endMessage.classList.remove('hide');
		if (playerScore > computerScore) {
			endMessage.innerText += `You win, ${playerScore} to ${computerScore}`;
		} else if (playerScore < computerScore) {
			endMessage.innerText += `You lose, ${computerScore} to ${playerScore}`;
		}
	}
}

const buttons = document.querySelectorAll('button');

buttons.forEach((btn) => {
	// disable buttons until amount of rounds is chosen
	btn.addEventListener('click', function () {
		game(this.name);
	});
});

// deactivate buttons after round end is reached
// fix message wording
// add reset button
