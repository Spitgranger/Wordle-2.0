// This module updates the game grid to reflect the information gained through the player's guesses, depicted through the different colors.

// Updates the background color of a guessed letter in the grid to the color green.
export function updateColorGreen(currentTile, currentRow){
    const tile = document.getElementById('row' + currentRow + '-tile-' + currentTile);
    tile.style.backgroundColor = '#22c55d';
}

// Updates the background color of a guessed letter in the grid to the color orange.
export function updateColorOrange(currentTile, currentRow) {
    const tile = document.getElementById('row' + currentRow + '-tile-' + currentTile);
    tile.style.backgroundColor = 'orange';
}

// Updates the background color of a guessed letter in the grid to the color gray.
export function updateColorGray(currentTile, currentRow) {
    const tile = document.getElementById('row' + currentRow + '-tile-' + currentTile);
    tile.style.backgroundColor = '#787c7e';
}
