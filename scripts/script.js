const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");

// Initializing game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;

// add current hints and hint index
let currentHints = [];
let hintIndex = 0;

// add timer
let countdown; // Timer interval reference
let timerDisplay = document.getElementById("timer"); // make sure you have this element in your HTML


function startTimer() {
    clearInterval(countdown); // reset if already running
    let timeLeft = 60;
  
    countdown = setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval(countdown);
        timerDisplay.textContent = "0:00 seconds";
        // 🔴 Add your time-out logic here
        gameOver(false); // show game over modal for timeout
        // Example: disable buttons, auto-miss, show "time's up" message, etc.
      } else {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} seconds`;
        timeLeft--;
      }
    }, 1000);
  }
  

const resetGame = () => {
    score = 5;
    document.getElementById("score").innerText = `Points: ${score}`;
    // Ressetting game variables and UI elements
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    wordDisplay.innerHTML = currentWord.split("").map(char =>
        char === " " ? `<li class="letter space"> </li>` : `<li class="letter"></li>`
      ).join("");   
    document.querySelectorAll(".word-display .letter").forEach((li, index) => {
    if (currentWord[index] === " ") {
        li.classList.add("guessed");
    }
    });  
    keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false);
    gameModal.classList.remove("show");
    startTimer();

}

// const getRandomWord = () => {
//     const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
//     currentWord = randomWord.word;
//     currentHints = randomWord.hints;
//     hintIndex = 0;
//     document.querySelector(".hint-text b").innerText = currentHints[hintIndex];
//     resetGame();
// };

let currentWordIndex = 0; // 👈 Track current index

const getNextWord = () => {
    // If we go past the end, loop back to start (optional)
    if (currentWordIndex >= wordList.length) currentWordIndex = 0;

    const nextWord = wordList[currentWordIndex];
    currentWord = nextWord.word;
    currentHints = nextWord.hints;
    hintIndex = 0;
    document.querySelector(".hint-text b").innerText = currentHints[hintIndex];
    document.getElementById("question-no").innerText = `Question No. ${currentWordIndex + 1}`; // 👈 Add this line
    resetGame();

    currentWordIndex++; // 👈 Advance to next word for future round
};



const gameOver = (isVictory) => {
    // After game complete.. showing modal with relevant details
    clearInterval(countdown);
    const modalText = isVictory ? `You found the word:` : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

const initGame = (button, clickedLetter) => {
    
    // Checking if clickedLetter is exist on the currentWord
    if(currentWord.includes(clickedLetter)) {
        // Showing all correct letters on the word display
        [...currentWord].forEach((letter, index) => {
            if(letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
        } else {
            //add wrong guess count
            wrongGuessCount++;
            hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
            //deduct score
            score = Math.max(0, score - 1); // prevent score from going below 0
            document.getElementById("score").innerText = `Points: ${score}`;
            if (hintIndex < currentHints.length - 1) {
                hintIndex++;
                document.querySelector(".hint-text b").innerText = currentHints[hintIndex];
            }
        }
    button.disabled = true; // Disabling the clicked button so user can't click again
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Calling gameOver function if any of these condition meets
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    const totalLetters = currentWord.replace(/ /g, "").length;
    if (correctLetters.length === totalLetters) return gameOver(true);

}

// Creating keyboard buttons and adding event listeners
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}
  

getNextWord();
playAgainBtn.addEventListener("click", getNextWord);


document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    // 👉 When modal is open, allow pressing "Enter" to play again
    if (gameModal.classList.contains("show")) {
        if (key === "enter") {
            playAgainBtn.click(); // simulate click on the button
        }
        return; // don't process anything else while modal is open
    }

    // Ignore if input is focused
    if (document.activeElement.tagName === "INPUT") return;

    // Only handle a-z keys
    if (key >= "a" && key <= "z") {
        const button = [...keyboardDiv.querySelectorAll("button")]
            .find(btn => btn.innerText.toLowerCase() === key);

        if (button && !button.disabled) {
            button.click();
        }
    }
});

 
