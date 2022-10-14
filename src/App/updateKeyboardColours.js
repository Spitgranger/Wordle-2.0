// This module updates the on screen keyboard to reflect the information gained through the player's guesses, depicted through the different colors.
var green = "rgb(34, 197, 93)";

// Updates the background color of a key on the keyboard to the color green.
export function updateKeyColorGreen(letter) {
    const key = document.getElementById(letter);
    key.style.backgroundColor = '#22c55d';
}

// Updates the background color of a key on the keyboard to the color orange.
export function updateKeyColorOrange(letter) {
    const key = document.getElementById(letter);
    // If the key is already green, it will not be updated.
    if (key.style.getPropertyValue('background-color') != green) {
        key.style.backgroundColor = 'orange';
    }
}

// Updates the background color of a key on the keyboard to the color gray.
export function updateKeyColorGray(letter) {
    const key = document.getElementById(letter);
    // If the key is already green or orange, it will not be updated.
    if (key.style.getPropertyValue('background-color') == green || key.style.getPropertyValue('background-color') == 'orange') {
        return;
    }
    else {
        key.style.backgroundColor = '#787c7e';
    }
}