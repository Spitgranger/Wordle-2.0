//imports from other files.
import { darkmode } from './darkmode.js';
import { statsModal } from './statsView.js';;
import { instructions, closer } from './instructions.js';
import {gameplay} from './click.js';

// This module calls/initalizes other modules.


// Initiates the gameplay logic module and function.
gameplay();

// Adds functionality to the UI element that toggles dark mode.
document.getElementById("Theme").addEventListener("click", event => {darkmode()});

// Adds functionality to the UI element that opens the stats modal window.
document.querySelector('.stats-btn').addEventListener("click", event => {statsModal()});

// Adds functionality to the UI element that opens the instructions modal window.
document.getElementById("infobar").addEventListener("click", event => {instructions()});
// Adds functionality to the UI element that closes the instructions modal window.
document.getElementsByClassName("close")[0].addEventListener("click", event => {closer()});