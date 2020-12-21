import generateRandom from '../utils.js';

const generateSequenceArray = (start, step, length) => (
  new Array(length).fill(0).map((item, i) => start + step * i)
);

const generateQuestion = () => {
  const MAX_START_NUM = 100;
  const MAX_STEP = 9;
  const MIN_STEP = 2;
  const PROGRESSION_LENGTH = 9;

  const start = generateRandom(MAX_START_NUM);
  const step = generateRandom(MAX_STEP, MIN_STEP);
  const hiddenIndex = generateRandom(0, PROGRESSION_LENGTH - 1);

  const sequenceArr = generateSequenceArray(start, step, PROGRESSION_LENGTH);
  const hiddenValue = sequenceArr[hiddenIndex];
  sequenceArr[hiddenIndex] = '..';
  const correctAnswer = getCorrectAnswer(hiddenValue);
  return { questionString: `${sequenceArr.join(' ')}`, correctAnswer };
};

const gameplayMsg = 'What number is missing in the progression?';
const isCorrectInput = (input) => typeof Number(input) === 'number';
const getCorrectAnswer = (hiddenValue) => hiddenValue;

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
  getCorrectAnswer,
});
