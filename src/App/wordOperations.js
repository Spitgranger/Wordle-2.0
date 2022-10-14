import { WORDS, WORDS4, WORDS6 } from "./constants.js";
// This module picks the correct word of the game and provides a way to see if the user guessed the correct word.

// Compares the user's guess to the correct word. 
// Returns true if they are the same, false if not.
export function isCorrectWord(word, solution){
    return word == solution;
}

// Depending on the gameplay mode, it will randomly select a 4, 5 or 6 letter word to be the correct word.
export function generateSolution(mode){
    let solution;
    if(mode == 4){
        solution = WORDS4[Math.floor(Math.random() * WORDS4.length)].toUpperCase(); 
    }
    else if (mode == 5){
        solution = WORDS[Math.floor(Math.random() * WORDS.length)].toUpperCase(); 
    }
    else if (mode == 6) {
        solution = WORDS6[Math.floor(Math.random() * WORDS6.length)].toUpperCase();
    }
    return solution
}