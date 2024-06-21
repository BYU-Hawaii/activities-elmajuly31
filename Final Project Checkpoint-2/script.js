function generateGame() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ''; // Clear existing content

  // Generate a random number between 1 and 100 for the game
  const minNumber = 1;
  const maxNumber = 100;
  const correctNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

  // Example AI-generated game content
  const gameContent = document.createElement('div');
  gameContent.className = 'game';
  gameContent.innerHTML = `
      <h3>Guess the Number</h3>
      <p>I'm thinking of a number between ${minNumber} and ${maxNumber}. Can you guess it?</p>
      <input type="number" id="userGuess" placeholder="Enter your guess" min="${minNumber}" max="${maxNumber}">
      <button onclick="checkGuess(${correctNumber})">Guess</button>
      <p id="feedback"></p>
  `;
  gameContainer.appendChild(gameContent);
}

function checkGuess(correctNumber) {
  const userGuess = document.getElementById('userGuess').value;
  const feedback = document.getElementById('feedback');

  if (userGuess === '') {
    feedback.textContent = 'Please enter a number.';
    return;
  }

  const guess = parseInt(userGuess, 10);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.textContent = 'Please enter a valid number between 1 and 100.';
    return;
  }

  if (guess === correctNumber) {
    feedback.textContent = 'Congratulations! You guessed the right number!';
  } else if (guess < correctNumber) {
    feedback.textContent = 'Try again! The number I\'m thinking of is higher.';
  } else {
    feedback.textContent = 'Try again! The number I\'m thinking of is lower.';
  }
}
