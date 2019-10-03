 
    export function getRandomThrow(randomNumber) {
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else if (randomNumber === 2) {
        return 'scissors';
    }
}
export default function getThrow() {
    const randomNumber = Math.floor(Math.random() * 3) + 0;
    const compHand = getRandomThrow(randomNumber);
    return compHand;
}




