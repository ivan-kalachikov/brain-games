import generateRandom from '../utils.js';

const euclideanAlgorithm = (values) => {
  let [a, b] = values;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const generateQuestion = () => {
  const MAX_NUM = 100;
  const a = generateRandom(MAX_NUM);
  const b = generateRandom(MAX_NUM);
  return { string: `${a} ${b}`, values: [a, b] };
};

const gameplayMsg = 'Find the greatest common divisor of given numbers.';
const isCorrectInput = (input) => typeof Number(input) === 'number';
const getCorrectAnswer = (question) => euclideanAlgorithm(question.values);
const isCorrectAnswer = (input, question) => Number(input) === getCorrectAnswer(question);

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
  isCorrectAnswer,
  getCorrectAnswer,
});
