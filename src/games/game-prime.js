import generateRandom from '../utils.js';

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

const generateQuestion = () => {
  const MAX_NUM = 100;
  const num = generateRandom(MAX_NUM);
  const correctAnswer = getCorrectAnswer(num);
  return { questionString: `${num}`, correctAnswer };
};

const gameplayMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isCorrectInput = (input) => input === 'yes' || input === 'no';
const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
  getCorrectAnswer,
});
