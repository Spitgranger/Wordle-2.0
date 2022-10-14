// This module handles all the UI alerts the game can communicate to the player.

// The HTML elements updated within the module.
var alerts = document.querySelector('.alerts-modal');
var text = document.getElementById("message");

// Updates the alert message according to the situation.
export function message(situation) {
    alerts.classList.add('modal-active')
    // Alerts the player if the guess is too short.
    if (situation == "short") {
        text.textContent = "Not enough letters";
    }
    // Alerts the player if the guess is invalid.
    else if (situation == "invalid") {
        text.textContent = "Word Not Found";
    }
    // Alerts the player if the guessed the correct word.
    else if (situation == "success") {
        text.textContent = "Success";
    }
    // Alerts the player when their gameboard was copied to their clipboard as emojis.
    else if (situation == "shared") {
        text.textContent = "Copied to clipboard";
    }
    // Alerts the player the correct word.
    else{
        let s = `Out of guesses, correct word was ${situation}`;
        text.textContent = s;
        return
    }
    // Removes alert UI after 2 seconds.
    setTimeout(function () {
        alerts.classList.remove('modal-active');
    }, 2000);
}