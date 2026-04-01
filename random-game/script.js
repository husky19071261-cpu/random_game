let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attemptsDisplay = document.getElementById("attempts");

  attempts++;

  if (!guess) {
    message.textContent = "Enter a valid number.";
    return;
  }

  if (guess === randomNumber) {
    message.textContent = "Correct! You win!";
  } else if (guess < randomNumber) {
    message.textContent = "Too low!";
  } else {
    message.textContent = "Too high!";
  }

  attemptsDisplay.textContent = "Attempts: " + attempts;
}
