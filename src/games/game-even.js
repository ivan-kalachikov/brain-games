import generateRandom from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateQuestion = () => {
  const MAX_NUM = 100;
  const num = generateRandom(MAX_NUM);
  const correctAnswer = getCorrectAnswer(num);
  return { questionString: `${num}`, correctAnswer };
};

const gameplayMsg = 'Answer "yes" if the number is even, otherwise answer "no".';
const isCorrectInput = (input) => input === 'yes' || input === 'no';
const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
  getCorrectAnswer,
});
