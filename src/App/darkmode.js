// This module handles the theme switch between dark and light mode.

// Switches all the UI elements to the appropraite color palette depending on the theme selected.
export function darkmode(){
    if(document.getElementById("Theme").checked){
        // Updates page color to white and text color to black.
        document.body.style.backgroundColor = "White";
        document.body.style.color = "Black";
        // Updates the keyboard key colors to the light theme if they are not already been updated to green, orange, or grey.
        var buttons = document.getElementsByClassName("keys");
        for (let i = 0; i < buttons.length; i++) {
            var button = document.getElementsByClassName("keys")[i];
            var color = "rgb(71, 85, 105)";
            if (button.style.getPropertyValue('background-color') == color) {
                button.style.backgroundColor = '#e2e8f0';
            }
            button.style.color = 'black';
        }
        // Sets the theme data in storage to match the current state.
        let theme = {
            bgColor: '#e2e8f0',
            color: 'black'
        }
        localStorage.setItem('Theme', JSON.stringify(theme));

    }else{
        // Updates page color to dark blue and text color to white.
        document.body.style.backgroundColor = "#0f182a";
        document.body.style.color = "White";
        // Updates the keyboard key colors to the dark theme if they are not already been updated to green, orange, or grey.
        var buttons = document.getElementsByClassName("keys");
        for (let i = 0; i < buttons.length; i++) {
            var button = document.getElementsByClassName("keys")[i];
            var color = "rgb(226, 232, 240)";
            console.log(button.style.getPropertyValue('background-color'))
            if (button.style.getPropertyValue('background-color') == color){
                button.style.backgroundColor = '#475569';
            }
            button.style.color = 'white';
        }
        // Sets the theme data in storage to match the current state.
        let theme = {
            bgColor: '#475569',
            color: 'white'
        }
        localStorage.setItem('Theme', JSON.stringify(theme));
    }
}