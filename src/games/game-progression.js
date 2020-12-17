import {generateRandom} from '../utils.js';
const options = {
  generateQuestion: () => {
    const MAX_NUM = 100;
    const MAX_STEP = 9;
    const start = generateRandom(MAX_NUM);
    const step = generateRandom(MAX_STEP);
    const arr = [];
    const PROGRESSION_LENGTH = 9;
    const hiddenIndex = generateRandom(0, PROGRESSION_LENGTH - 1);
    let value;
    for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
      if (hiddenIndex === i) {
        arr[i] = '..';
        value = start + step * (i + 1);
      } else {
        arr[i] = start + step * (i + 1);
      }
    }
    return { string: `${arr.join(' ')}`, value };
  },
  gameplayMsg: 'What number is missing in the progression?',
  isCorrectInput: (input) => typeof Number(input) === 'number',
  getCorrectAnswer: (question) => question.value,
  isCorrectAnswer: (input, question, getCorrectAnswer) => (
    Number(input) === getCorrectAnswer(question)
  ),
};
export default options;
