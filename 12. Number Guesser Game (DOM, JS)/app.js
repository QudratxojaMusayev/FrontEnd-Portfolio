// Game values
let min = 1,
    max = 10,
    winningNumber = getRandomNumber(min, max),
    guessesLeft = 3;

// UI elements
const gameUI = document.querySelector('#game'),
    minNumUI = document.querySelector('.min-num'),
    maxNumUI = document.querySelector('.max-num'),
    guessBtnUI = document.querySelector('#guess-btn'),
    guessInputUI = document.querySelector('#guess-input'),
    messageUI = document.querySelector('.message');

// Assign UI min and max
minNumUI.textContent = min;
maxNumUI.textContent = max;

// Listen for guess
guessBtnUI.addEventListener('click', function (e) {
    let guess = parseInt(guessInputUI.value);
    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        gameOver(`Please enter a number between ${min} and ${max}`);
    } else {
        // Check if won
        if (guess === winningNumber) {
            // Set message
            gameOver(`${winningNumber} is correct! You win!`, true, true);
        } else {
            // Decrease the chances
            guessesLeft--;

            if (guessesLeft === 0) {
                // Set a message
                gameOver(`${guess} is incorrect. The number was ${winningNumber}. Game over!`, false, true);
            } else {
                // Set a message
                gameOver(`${guess} is incorrect. You have ${guessesLeft} more chance(s)`)
            }
        }
    }
});

// Play again event listener
gameUI.addEventListener('mouseup', function (e) {
    if (e.target.classList.contains('play-again')) {
        window.location.reload();
    }
})

function gameOver(message, won = false, playAgain = false) {
    let color = (won) ? 'green' : 'red';
    messageUI.textContent = message;
    messageUI.style.color = color;
    guessInputUI.style.borderColor = color;
    if (won || guessesLeft === 0) {
        guessInputUI.disabled = true;
    } else {
        guessInputUI.value = '';
    }

    if (playAgain) {
        guessBtnUI.value = 'Play Again?';
        guessBtnUI.classList.add('play-again');
    }
}

function getRandomNumber(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}