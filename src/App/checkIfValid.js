import { WORDS, WORDS4, WORDS6, VALID } from "./constants.js";

// This module checks if the player's guessed word, is contained within our accepted word lists.

// Checks if the guessed word is within the word lists.
export function isWordInWordList(word) {
    return (WORDS.includes(word.toLowerCase()) || WORDS6.includes(word.toLowerCase()) ||
        VALID.includes(word.toLowerCase()) || WORDS4.includes(word.toLowerCase()));
};