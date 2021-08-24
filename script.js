let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/**
 * @returns Random number between 0 and 9
 */
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}