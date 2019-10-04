import getThrow, { getResults } from './getRandomThrow.js';

const userScore = document.getElementById('user-score');
const compScore = document.getElementById('comp-score');
const results = document.getElementById('results');
const playBtn = document.getElementById('play-btn');
const compChoice = document.getElementById('comp-choice');
let userWin = 0;
let compWin = 0;

playBtn.addEventListener('click', () => {
    
    const compHand = getThrow();

    compChoice.classList.remove('hidden');
    const src = './asset/' + compHand + '.png';
    compChoice.src = src;

    const userHand = document.querySelector('input:checked');
    const userPick = userHand.value;
    userScore.textContent = userWin;
    compScore.textContent = compWin;

    const gameResults = getResults(compHand, userPick);

    if (gameResults === 'tie') {
        results.textContent = `You picked ${userPick} and computer picked ${compHand} it's a tie`;
    } else if (gameResults === 'win') {
        userWin++; 
        results.textContent = `Nice! computer picked ${compHand} your ${userPick} wins!`;
    } else {
        compWin++; 
        results.textContent = `Oh No! the computer has ${compHand} which beats your ${userPick} you lose!`;
        
        
    } 
});
