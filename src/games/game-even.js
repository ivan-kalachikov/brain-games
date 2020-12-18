import generateRandom from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateQuestion = () => {
  const MAX_NUM = 100;
  const num = generateRandom(MAX_NUM);
  return { string: `${num}`, value: num };
};

const gameplayMsg = 'Answer "yes" if the number is even, otherwise answer "no".';
const isCorrectInput = (input) => input === 'yes' || input === 'no';
const getCorrectAnswer = (question) => (isEven(question.value) ? 'yes' : 'no');
const isCorrectAnswer = (input, question) => input === getCorrectAnswer(question);

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
  isCorrectAnswer,
  getCorrectAnswer,
});
