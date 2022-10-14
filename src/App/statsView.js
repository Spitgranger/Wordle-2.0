import { stats } from './stats.js'
// This module updates the statistics visuals to reflect the player's current statistics data.

// Declares the HTML elements updated within this module.
var statsModalClose = document.querySelector('.stats-modal-close');
var statsBg = document.querySelector('.stats-modal-bg');
const currentStreak = document.querySelector('.current-streak');
const bestStreak = document.querySelector('.best-streak');
const gamesPlayed = document.querySelector('.games-played');
const success = document.querySelector('.success');

// Updates the on screen text for the player's stats to match any updates and opens the stats modal.
export function statsModal() {
    currentStreak.textContent = "Current Streak: " + stats.currentStreak;
    bestStreak.textContent = "Best Streak: " + stats.bestStreak;
    gamesPlayed.textContent = "Games Played: " + stats.totalGames;
    success.textContent = "Success Rate " + stats.successRate + "%";
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawBasic);
    statsBg.classList.add('modal-active')
};

// Closes the stats modal.
statsModalClose.addEventListener('click', function () {
    statsBg.classList.remove('modal-active')
});

// Displays a graph for the player's guess distribution.
function drawBasic() {
    // Gives the graph API the nessessary statistics. 
    var data = google.visualization.arrayToDataTable([
        ['Guesses', 'Amount'],
        ['1', stats.winDistribution[0]],
        ['2', stats.winDistribution[1]],
        ['3', stats.winDistribution[2]],
        ['4', stats.winDistribution[3]],
        ['5', stats.winDistribution[4]],
        ['6', stats.winDistribution[5]],
        ['7', stats.winDistribution[6]]
    ]);

    // Visual settings for the graph.
    var options = {
        backgroundColor: '#2292ee',
        legend: 'none',
        width: '100%',
        chartArea: {
            height: '90%',
            backgroundColor: '#abdbe3',
            top: 0
        },
        colors: ['red', '#004411'],
        hAxis: {
            minValue: 0,
            textPosition: 'none',
            maxValue: Math.max.apply(Math, stats.winDistribution)

        }
    };
    var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}