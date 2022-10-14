import { message } from './alert.js';
// This module provides a means to share the result of the player's last game.

// Copies the game board in the form of emojis to the player's clipboard.
export function share(gameState,guessLength){
    if(gameState){
        var tiles = document.getElementsByClassName("tile");
        let s = "";
        var green = "rgb(34, 197, 93)";
        var gray = "rgb(120, 124, 126)";
        var orange = "orange";
        for (let i = 0; i < tiles.length; i++) {
            var tile = document.getElementsByClassName("tile")[i];
            if(i%guessLength == 0 && i != 0){
                s = s + "\n"
            }
            if (tile.style.getPropertyValue('background-color') == green) {
                s = s +"🟩"
            }
            else if (tile.style.getPropertyValue('background-color') == gray) {
                s = s + "⬛"
            }
            else if (tile.style.getPropertyValue('background-color') == orange) {
                s = s + "🟨"
            }
        }
        navigator.clipboard.writeText(s);
        message("shared")
    }
}