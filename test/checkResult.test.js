import getThrow, { getRandomThrow } from '../getRandomThrow.js';

const test = QUnit.test;

test('returns rock when throw is 0', assert => {
    const randomNumber = 0;
    const expected = 'rock';
    const result = getRandomThrow(randomNumber);
    assert.equal(result, expected);
});
test('paper for 1', assert => {
    const randomNumber = 1;
    const expected = 'paper';
    const result = getRandomThrow(randomNumber);
    assert.equal(result, expected);
});
test('scissors for 2', assert => {
    const randomNumber = 2;
    const expected = 'scissors';
    const result = getRandomThrow(randomNumber);
    assert.equal(result, expected);
});

test('getThrow should give random number', assert => {
    const compHand = ['rock', 'paper', 'scissors'];
    const result = getThrow();
    assert.equal(true, compHand.includes(result));
});



