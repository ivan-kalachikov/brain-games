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

const gameplayMsg = 'Find the greatest common divisor of given numbers.';
const isCorrectInput = (input) => typeof input === 'number';
const getCorrectAnswer = (values) => euclideanAlgorithm(values);

const generateQuestion = () => {
  const MAX_NUM = 100;
  const a = generateRandom(MAX_NUM);
  const b = generateRandom(MAX_NUM);
  const correctAnswer = getCorrectAnswer([a, b]);
  return { questionString: `${a} ${b}`, correctAnswer };
};

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
});
