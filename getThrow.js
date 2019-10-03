export getThrow
// const randomHand = Math.floor(Math.random() * 3);
// const rpc = getResults(randomHand);

export  function rockPaperScissors()  {
    const randomHand = Math.floor(Math.random() * 3);
    const rpc = getResults(randomHand);
    if(randomHand === 0) {
        return 'rock';
    } else(randomHand === 1) {
        return 'paper';
    } else if(randomHand === 2) {
        return 'scissors'
    }

}