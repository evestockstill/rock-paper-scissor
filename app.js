import getRandomThrow from './getRandomThrow.js';

const userScore = document.getElementById('user-score');
const compScore = document.getElementById('comp-score');
const results = document.querySelector('.result-message');
const playbtn = document.getElementById('play-btn');
const rockImg = document.getElementById('rock-img');

let userWin = 0;
let compWin = 0;

playbtn.addEventListener('click', () => {
    const compHand = getRandomThrow();
    const userHand = document.querySelector('input:checked');
    const userPick = userHand.value;
    userScore.textContent = userWin;
    compScore.textContent = compWin;
    rockImg.classList.remove('hidden');
    const tie = userPick === compHand;
    const win = userPick === 'rock' && compHand === 'scissors' || userPick === 'scissors' && 
    compHand === 'paper' || userPick === 'paper' && compHand === 'rock';
    const loss = userPick === 'rock' && compHand === 'paper' || userPick === 'paper' && compHand === 'scissors' ||
    userPick === 'scissors' && compHand === 'rock';
    if (tie) {
        results.textContent = `You picked ${userPick} and computer picked ${compHand} it's a tie`;
    } else if (win) {
        results.classList.remove('hidden');
        results.textContent = `Nice! computer picked ${compHand} your ${userPick} wins!`;
        
        userWin++;
    } else if (loss) {
        results.classList.remove('hidden');
        results.textContent = `Oh No! the computer has ${compHand} which beats your ${userPick} you lose!`;
       
        compWin++;  
    }
});


