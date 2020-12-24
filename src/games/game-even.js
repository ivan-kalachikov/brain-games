import generateRandom from '../utils.js';

const MAX_NUM = 100;

const isEven = (num) => num % 2 === 0;

const gameplayMsg = 'Answer "yes" if the number is even, otherwise answer "no".';
const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const generateGameRound = () => {
  const num = generateRandom(MAX_NUM);
  const correctAnswer = getCorrectAnswer(num);
  return { questionString: String(num), correctAnswer };
};

export default () => ({
  generateGameRound,
  gameplayMsg,
});
