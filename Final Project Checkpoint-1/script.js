function generateGame() {
  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = ''; // Clear existing content

  // Example AI-generated game content
  const gameContent = document.createElement('div');
  gameContent.className = 'game';
  gameContent.innerHTML = `
      <h3>Guess the Number</h3>
      <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>
      <input type="number" id="userGuess" placeholder="Enter your guess">
      <button onclick="checkGuess()">Guess</button>
      <p id="feedback"></p>
  `;
  gameContainer.appendChild(gameContent);
}

function checkGuess() {
  const userGuess = document.getElementById('userGuess').value;
  const feedback = document.getElementById('feedback');
  const correctNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100

  if (userGuess == correctNumber) {
      feedback.textContent = 'Congratulations! You guessed the right number!';
  } else {
      feedback.textContent = 'Try again! The correct number
