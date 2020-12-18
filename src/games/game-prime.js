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
  return { string: `${num}`, value: num };
};

const gameplayMsg = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isCorrectInput = (input) => input === 'yes' || input === 'no';
const getCorrectAnswer = (question) => (isPrime(question.value) ? 'yes' : 'no');
const isCorrectAnswer = (input, question) => input === getCorrectAnswer(question);

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
  isCorrectAnswer,
  getCorrectAnswer,
});
