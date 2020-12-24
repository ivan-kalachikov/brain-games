import generateRandom from '../utils.js';

const MAX_NUM = 100;

const getGCD = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const gameplayMsg = 'Find the greatest common divisor of given numbers.';

const generateGameRound = () => {
  const a = generateRandom(MAX_NUM);
  const b = generateRandom(MAX_NUM);
  const correctAnswer = String(getGCD(a, b));
  return { questionString: `${a} ${b}`, correctAnswer };
};

export default () => ({
  generateGameRound,
  gameplayMsg,
});
