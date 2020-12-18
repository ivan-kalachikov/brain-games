import generateRandom from '../utils.js';

const generateSequenceArray = (start, step, length) => (
  new Array(length).fill(0).map((item, i) => start + step * i)
);

const generateQuestion = () => {
  const MAX_START_NUM = 100;
  const MAX_STEP = 9;
  const PROGRESSION_LENGTH = 9;

  const start = generateRandom(MAX_START_NUM);
  const step = generateRandom(MAX_STEP);
  const hiddenIndex = generateRandom(0, PROGRESSION_LENGTH - 1);

  const sequenceArr = generateSequenceArray(start, step, PROGRESSION_LENGTH);
  const hiddenValue = sequenceArr[hiddenIndex];
  sequenceArr[hiddenIndex] = '..';
  return { string: `${sequenceArr.join(' ')}`, value: hiddenValue };
};

const gameplayMsg = 'What number is missing in the progression?';
const isCorrectInput = (input) => typeof Number(input) === 'number';
const getCorrectAnswer = (question) => question.value;
const isCorrectAnswer = (input, question) => Number(input) === getCorrectAnswer(question);

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
  isCorrectAnswer,
  getCorrectAnswer,
});
