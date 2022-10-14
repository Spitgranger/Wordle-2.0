// This module handles the displaying of the games instructions. 

// The modal window the alert messages appear on.
var modal = document.querySelector('.modal');


// Opens the instructions modal window. 
export function instructions() {
    modal.classList.add('modal-active');
}

// Closes the instructions modal window. 
export function closer() {
    modal.classList.remove('modal-active');
}
