// This module updates the data of the playey's statistics:
// handles the loading and storing of the data to local storage.

// Default stas for new players.
const defaultStats = {
    winDistribution: [0, 0, 0, 0, 0, 0, 0],
    gamesFailed: 0,
    currentStreak: 0,
    bestStreak: 0,
    totalGames: 0,
    successRate: 0,
}

// Loads the player's stats from their browser's local storage.
var prestats = localStorage.getItem('PlayerStats');
// If the player is new, the stats will be set to the default value.
export const stats = (prestats ? JSON.parse(prestats) : null) || defaultStats;

// Updates the player's stats to include their last game's performance. 
export function setStats(attemptsTaken, attemptsAllowed) {
    stats.totalGames += 1
    if (attemptsTaken > attemptsAllowed-1) {
        // Failure to find the correct word. 
        stats.currentStreak = 0
        stats.gamesFailed += 1
    } else {
        // Updates player's streaks and guess distribtuion if correct word was found.
        stats.winDistribution[attemptsTaken] += 1
        stats.currentStreak += 1
        if (stats.bestStreak < stats.currentStreak) {
            stats.bestStreak = stats.currentStreak
        }
    }
    stats.successRate = getSuccessRate()
    // Stores the player's stats to their browser's local storage.
    localStorage.setItem('PlayerStats', JSON.stringify(stats));
}

// Calculates the player's current win rate.
function getSuccessRate() {
    var totalGames = stats.totalGames, gamesFailed = stats.gamesFailed;
    return Math.round((100 * (totalGames - gamesFailed)) / Math.max(totalGames, 1));
};