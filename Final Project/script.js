// Array of words for the game (add more if needed)
var words = [
  "APPLE",
  "BANANA",
  "ORANGE",
  "STRAWBERRY",
  "MANGO",
  "BLUEBERRY",
  "PINEAPPLE",
  "PAPAYA",
  "WATERMELON",
  "PEAR",
  "GRAPEFRUIT",
  "KIWIFRUIT",
  "DRAGONFRUIT",
];

// Function to pick a random word from the array
function pickRandomWord() {
  var index = Math.floor(Math.random() * words.length);
  return words[index];
}

// Function to scramble a word
function scrambleWord(word) {
  var scrambled = "";
  var array = word.split("");
  while (array.length > 0) {
      var randomIndex = Math.floor(Math.random() * array.length);
      scrambled += array[randomIndex];
      array.splice(randomIndex, 1);
  }
  return scrambled;
}

// Global variables
var currentWord = pickRandomWord();
var scrambledWord = scrambleWord(currentWord);

// Display scrambled word
document.getElementById("scrambled-word").innerText = scrambledWord;

// Function to check the answer
document.getElementById("check-btn").addEventListener("click", function() {
  var userAnswer = document.getElementById("word-input").value.toUpperCase();
  if (userAnswer === currentWord) {
      document.getElementById("feedback").innerText = "Correct! Well done.";
      // Reset for a new word
      currentWord = pickRandomWord();
      scrambledWord = scrambleWord(currentWord);
      document.getElementById("scrambled-word").innerText = scrambledWord;
      document.getElementById("word-input").value = "";
  } else {
      document.getElementById("feedback").innerText = "Incorrect. Try again.";
  }
});
