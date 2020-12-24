import generateRandom from '../utils.js';

const MAX_START_NUM = 100;
const MAX_STEP = 9;
const MIN_STEP = 2;
const PROGRESSION_LENGTH = 9;

const generateProgression = (start, step, length) => (
  new Array(length).fill(0).map((item, i) => start + step * i)
);

const gameplayMsg = 'What number is missing in the progression?';

const generateGameRound = () => {
  const start = generateRandom(MAX_START_NUM);
  const step = generateRandom(MAX_STEP, MIN_STEP);
  const hiddenIndex = generateRandom(0, PROGRESSION_LENGTH - 1);

  const progression = generateProgression(start, step, PROGRESSION_LENGTH);
  const hiddenValue = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const correctAnswer = String(hiddenValue);
  return { questionString: progression.join(' '), correctAnswer };
};

export default () => ({
  generateGameRound,
  gameplayMsg,
});
