 
export function getRandomThrow(randomNumber) {
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
}
export function getResults(compHand, userPick) {
    if (userPick === compHand) {
        return 'tie'; 
    } else if (userPick === 'rock' && compHand === 'scissors' || userPick === 'scissors' &&
        compHand === 'paper' || userPick === 'paper' && compHand === 'rock') {
        return 'win';
    } else {
        return 'loss';
    }
}
export default function getThrow() {
    const randomNumber = Math.floor(Math.random() * 3) + 0;
    const compHand = getRandomThrow(randomNumber);
    return compHand;
}




