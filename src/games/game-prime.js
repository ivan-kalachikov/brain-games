import generateRandom from '../utils.js';

const MAX_NUM = 100;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameplayMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const generateGameRound = () => {
  const num = generateRandom(MAX_NUM);
  const correctAnswer = getCorrectAnswer(num);
  return { questionString: String(num), correctAnswer };
};

export default () => ({
  generateGameRound,
  gameplayMsg,
});
