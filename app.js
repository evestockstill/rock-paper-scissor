import getThrow, { getResults } from './getRandomThrow.js';

const userScore = document.getElementById('user-score');
const compScore = document.getElementById('comp-score');
const results = document.getElementById('results');
const playBtn = document.getElementById('play-btn');
const compChoice = document.getElementById('comp-choice');

let userWin = 0;
let compWin = 0;

const playGame = () => {
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
        results.textContent = `Boring you picked ${userPick} and I picked ${compHand} it's a tie`;
    } else if (gameResults === 'win') {
        userWin++; 
        results.textContent = `${userPick} beats ${compHand}, but I don't lose, I let you win..`;
    } else {
        compWin++; 
        results.textContent = `Yes! I win, ${compHand} beats ${userPick} you lose!`;
    } 
};
playBtn.addEventListener('click', playGame);