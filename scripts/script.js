const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const hangmanImage = document.querySelector(".hangman-box img");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = gameModal.querySelector("button");
const container = document.querySelector(".container");
const menuModal = document.querySelector(".menu-modal");
const numberGrid = document.querySelector(".number-grid");

// Game variables
let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;
let currentHints = [];
let hintIndex = 0;
let countdown;
let timerDisplay = document.getElementById("timer");
let score = 5;
let selectedNumbers = [];

// Create number selection menu
function createNumberMenu() {
    numberGrid.innerHTML = "";
    const maxNumbers = Math.min(10, wordList.length);
    for (let i = 1; i <= maxNumbers; i++) {
        const numberBtn = document.createElement("button");
        numberBtn.innerText = i;
        numberBtn.addEventListener("click", () => selectWord(i - 1));
        
        // Style based on whether number has been selected
        if (selectedNumbers.includes(i)) {
            numberBtn.style.backgroundColor = "#cccccc";
            numberBtn.style.cursor = "not-allowed";
            numberBtn.disabled = true;
        }
        
        numberGrid.appendChild(numberBtn);
    }
}

// Select word from menu
function selectWord(index) {
    if (index >= 0 && index < wordList.length) {
        // Add to selected numbers if not already there
        if (!selectedNumbers.includes(index + 1)) {
            selectedNumbers.push(index + 1);
        }
        
        const selectedWord = wordList[index];
        currentWord = selectedWord.word;
        currentHints = selectedWord.hints;
        hintIndex = 0;
        document.querySelector(".hint-text b").innerText = currentHints[hintIndex];
        document.getElementById("question-no").innerText = `Word ${index + 1}`;
        
        // Hide menu and show game
        menuModal.classList.remove("show");
        gameModal.classList.remove("show"); // Add this line to ensure modal is hidden
        container.style.display = "block";
        resetGame();
        
        // Update number buttons
        updateNumberButtons();
    }
}

function updateNumberButtons() {
    const numberButtons = document.querySelectorAll(".number-grid button");
    numberButtons.forEach(button => {
        const number = parseInt(button.innerText);
        if (selectedNumbers.includes(number)) {
            button.style.backgroundColor = "#cccccc";
            button.style.cursor = "not-allowed";
            button.disabled = true;
        } else {
            button.style.backgroundColor = "#5E63BA";
            button.style.cursor = "pointer";
            button.disabled = false;
        }
    });
}

// Reset game function
const resetGame = () => {
    score = 5;
    document.getElementById("score").innerText = `Points: ${score}`;
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = "images/hangman-0.svg";
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    
    // Create word display
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
};

// Timer function
function startTimer() {
    clearInterval(countdown);
    let timeLeft = 60;
  
    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerDisplay.textContent = "0:00 seconds";
            gameOver(false);
        } else {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds} seconds`;
            timeLeft--;
        }
    }, 1000);
}

// Game over function
const gameOver = (isVictory) => {
    clearInterval(countdown);
    const modalText = isVictory ? 'You found the word:' : 'The correct word was:';
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
    gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
    gameModal.classList.add("show");
}

// Initialize game when letter is clicked
const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`;
        score = Math.max(0, score - 1);
        document.getElementById("score").innerText = `Points: ${score}`;
        if (hintIndex < currentHints.length - 1) {
            hintIndex++;
            document.querySelector(".hint-text b").innerText = currentHints[hintIndex];
        }
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount === maxGuesses) return gameOver(false);
    const totalLetters = currentWord.replace(/ /g, "").length;
    if (correctLetters.length === totalLetters) return gameOver(true);
}

// Create keyboard
for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

// Event listeners
playAgainBtn.addEventListener("click", () => {
    container.style.display = "none";
    gameModal.classList.remove("show"); // Ensure modal is hidden
    menuModal.classList.add("show");
    updateNumberButtons(); // Update button states when returning to menu
});

document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    if (gameModal.classList.contains("show")) {
        if (key === "enter") {
            playAgainBtn.click();
        }
        return;
    }

    if (document.activeElement.tagName === "INPUT") return;

    if (key >= "a" && key <= "z") {
        const button = [...keyboardDiv.querySelectorAll("button")]
            .find(btn => btn.innerText.toLowerCase() === key);

        if (button && !button.disabled) {
            button.click();
        }
    }
});

// Initialize the game
createNumberMenu();
container.style.display = "none";