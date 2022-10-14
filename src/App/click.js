// Imports from other files.
import { isCorrectWord, generateSolution } from './wordOperations.js';
import { createGameBoard } from './createGameBoard.js';
import {updateKeyColorGray,updateKeyColorGreen, updateKeyColorOrange} from './updateKeyboardColours.js'
import { updateColorGray, updateColorGreen, updateColorOrange } from './updateTiles.js';
import { isWordInWordList } from './checkIfValid.js';
import { FOUR, FIVE, SIX, KEYS } from "./constants.js";
import { setStats } from './stats.js';
import { message } from './alert.js';
import { share } from './share.js';
// This module handles all the gameplay logic; the updates required for the game board and on screen keyboard.

// Function handling gamestate, player clicks and gameplay logic:
export function gameplay(){

// Initialize Variables
// Containter where game baord is maintained.
const showTile = document.querySelector('.tile-container');
// Containter where on screen keyboard is maintained.
const keyboard = document.querySelector('.key-container');
// Initializes gameboard to 5 letter gameplay mode.
let gameBoard = FIVE;
// Initializes gameState as not complete.
let gameState = false;
// Initializes game board indexes to default values.
var currentRow = 0;
var currentTile = 0;
// Initializes word length.
let guessLength = 5;
// Initializes number of attempts the player has.
let attempts = 6;
// Generates a correct word for the game, from our lists.
let solution = generateSolution(guessLength);
let solutionArray = solution.split('');

// Creates the gameboard and on screen keyboard.
buildKeys();
createGameBoard(FIVE,showTile);

// Handles the switching of gameplay modes.
function switchTo(size) {
    // Removes any alert messages that may be active.
    var alerts = document.querySelector('.alerts-modal');
    alerts.classList.remove('modal-active');
    // Resets previous game board and on-screen keyboard.
    while (showTile.firstChild) {
        showTile.removeChild(showTile.firstChild);
    }
    while (keyboard.firstChild) {
        keyboard.removeChild(keyboard.firstChild);
    }
    // Updates game board size, number of attempts, guess lengths and game state accordingly.
    gameBoard = size;
    gameState = false
    currentRow = 0;
    currentTile = 0;
    guessLength = size[0].length;
    attempts = size.length
    // Generates a new game board, correct word and resets on-screen keyboard colors.
    buildKeys();
    solution = generateSolution(guessLength);
    solutionArray = solution.split('');
    createGameBoard(size, showTile);
}

// Adds functionality to the UI elements for switching between the gameplay modes.
document.getElementById("four").addEventListener("click", switchTo.bind(event,FOUR));
document.getElementById("five").addEventListener("click", switchTo.bind(event, FIVE));
document.getElementById("six").addEventListener("click", switchTo.bind(event, SIX));
// Adds functionality to the share UI element.
document.getElementById("share").addEventListener("click", event => {share(gameState,guessLength)});


// Creates the on screen keyboard with the current theme colors applied and as a set of functioning clickable keys.
function buildKeys(){
    var theme = localStorage.getItem('Theme');
    theme = JSON.parse(theme) 
    KEYS.forEach(key => {
        const button = document.createElement('button');
        button.classList.add('keys')
        button.style.setProperty('background-color', theme.bgColor);
        button.style.setProperty('color', theme.color);
        button.textContent = key;
        button.setAttribute('id', key);
        button.addEventListener('click', () => clicked(key));
        keyboard.append(button);
    })
}

// Responds to the player's letter choices, allowing them to form a word to guess. Adds the choosen letters to the gameboard.
function clicked(letter){
    // Checks if the game has not been completed.
    if (!gameState) {
        // Removes letter from game board.
        if (letter === 'BACK') {
            deleteLetter();
            return
        }
        // Confirms/locks in the guess word.
        if (letter === 'ENTER') {
            // Alerts the player if their guess is too short. 
            if (currentTile < guessLength) {
                message("short");
            }
            // If the the guess is the correct length:
            else {
                // Converts the letters of the guess in the gameboard to a string and an array format.
                let guess = gameBoard[currentRow].join('');
                let guessArray = guess.split('');
                // Checks if the word is a valid guess; in our curated word lists.
                // Then checks the accuracy of the guess.
                if(isWordInWordList(guess)){
                    let a = [...solutionArray];
                    // Updates the gameboard and on-screen keyboard for the letters not in the correct word.
                    for (let tile = 0; tile < guessLength; tile++) {
                        updateColorGray(tile, currentRow);
                        updateKeyColorGray(guessArray[tile]);
                    }
                    // Updates the gameboard and on-screen keyboard for the letters in the correct word and in the correct position, by comparing the guessed word to the correct word.
                    for (let tile = 0; tile < guessLength; tile++) {
                        if (guessArray[tile] == solutionArray[tile]) {
                            let temp = a.indexOf(guessArray[tile]);
                            updateColorGreen(tile, currentRow);
                            updateKeyColorGreen(guessArray[tile]);
                            a.splice(temp,1);
                        }
                    }
                    // Updates the gameboard and on-screen keyboard for the letters in the correct word and in the incorrect position, by comparing the guessed word to the correct word.
                    for (let tile = 0; tile < guessLength; tile++) {
                        if ((a.includes(guessArray[tile])) && (document.getElementById('row' + String(currentRow) + '-tile-' + String(tile)).style.backgroundColor != "rgb(34, 197, 93)")) {
                            let index = a.indexOf(guessArray[tile]);
                            updateColorOrange(tile, currentRow);
                            updateKeyColorOrange(guessArray[tile]);
                            a.splice(index,1);
                        }
                    }
                    // If the player guesses the word correctly: sets the game state to complete, alerts the player with a success message, and updates stats.
                    if(isCorrectWord(guess, solution)){
                        gameState = !gameState;
                        message("success");
                        setStats(currentRow, attempts);
                    }
                    // Updates gameboard state for next guess.
                    currentRow++;
                    currentTile = 0;
                    // If the player runs out attempts: sets the game state to complete, alerts the player with the correct word, and updates stats.
                    if (currentRow > attempts-1 && !isCorrectWord(guess, solution)) {
                        gameState = !gameState;
                        message(solution);
                        setStats(currentRow, attempts);
                    }
                }
                // If the guess is not valid (Not in the curated list), alerts the player with an invalid message.
                else{
                    message("invalid");
                }
            };
            return
        }
        // Adds the letter to the game board.
        addLetter(letter);
    }
}

// Add choosen letters to the current guess in the game board. If the current guess has reached it's limit in size, then the letter is not added (nothing happens).
const addLetter = (letter) => {
    if (currentTile <= guessLength && currentRow < attempts) {
        const tile = document.getElementById('row' + currentRow + '-tile-' + currentTile);
        tile.textContent = letter;
        gameBoard[currentRow][currentTile] = letter;
        currentTile++;
    }
}

// Deletes letters from the current guess in the game board. If the current guess has no letters to be deleted, no letters are removed (nothing happens).
const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById('row' + currentRow + '-tile-' + currentTile);
        tile.textContent = '';
        gameBoard[currentRow][currentTile] = '';
    }
}

// Adds physical keyboard support. Allows the user to type with their own keyboard.
document.addEventListener('keydown', (event) => {
    event.preventDefault();
    let letter = event.key.toUpperCase();
    if(letter == 'BACKSPACE'){
        letter = 'BACK'
    }
    if (KEYS.includes(letter)) {
        clicked(letter);
    }
});
}