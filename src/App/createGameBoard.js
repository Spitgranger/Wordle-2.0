// This module handles creating a blank game board to the correct size.

// Creates the game board. 
// Creating divisions for each individual row and board tile.
export function createGameBoard(rows,showTile){
    rows.forEach((rows, index) => {
        const rowElement = document.createElement('div');
        rowElement.setAttribute('id', 'row' + index);
        rows.forEach((_guess, guessIndex) => {
            const tileElement = document.createElement('div');
            tileElement.setAttribute('id', 'row' + index + '-tile-' + guessIndex);
            tileElement.classList.add('tile');
            rowElement.append(tileElement);
        })
        showTile.append(rowElement);
    })
}