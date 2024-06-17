// script.js

// Add event listeners to the "Play Now" buttons
const playButtons = document.querySelectorAll('.games li button');

playButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // Get the game title and image URL
    const gameTitle = button.parentNode.querySelector('h2').textContent;
    const gameImage = button.parentNode.querySelector('img').src;

    // Create a new window for the game
    const gameWindow = window.open('', '_blank');
    gameWindow.document.write(`
      <html>
        <head>
          <title>${gameTitle}</title>
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <h1>${gameTitle}</h1>
          <img src="${gameImage}" alt="${gameTitle}">
          <!-- Add game logic and functionality here -->
          <script>
            // Add game logic and functionality here
          </script>
        </body>
      </html>
    `);
  });
});