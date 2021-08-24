let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/**
 * @returns Random number between 0 and 9
 */
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

/**
 * Compare two guesses with a target number
 * @param {*} humanGuess human player guess
 * @param {*} computerGuess computer player guess
 * @param {*} target target number
 * @returns true if draw or human is closer. False if computer is closer.
 */
const compareGuesses = (humanGuess, computerGuess, target) => {
    let humanDelta = Math.abs(target - humanGuess);
    let computerDelta = Math.abs(target - computerGuess);
    return humanDelta <= computerDelta
}

/**
 * Updates scoreboard. Adds 1 point.
 * @param {*} playerType enum string "human" or "computer"
 */
const updateScore = (playerType) => {
    switch (playerType) {
        case playerType === "human":
            humanScore++;
            break;
        case playerType === "computer":
            computerScore++;
            break;
    }
}

const advanceRound = () => {
    currentRoundNumber++
}