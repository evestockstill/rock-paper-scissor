

function getCompHand() {
    const randomNumber = Math.floor(Math.random() * 3);
    const compHand = randomNumber;
    if (compHand === 0) {
        return 0;
    } else if (compHand === 1) {
        return 1;
    } else {
        return 2;
    }
}
    

export default getCompHand;






