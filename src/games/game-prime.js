import {generateRandom} from '../utils.js';
const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const options = {
  generateQuestion: () => {
    const MAX_NUM = 100;
    const num = generateRandom(MAX_NUM);
    return { string: `${num}`, value: num };
  },
  gameplayMsg: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  isCorrectInput: (input) => input === 'yes' || input === 'no',
  getCorrectAnswer: (question) => (isPrime(question.value) ? 'yes' : 'no'),
  isCorrectAnswer: (input, question, getCorrectAnswer) => (
    input === getCorrectAnswer(question)
  ),
};
export default options;
