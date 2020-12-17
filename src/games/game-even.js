import {generateRandom} from '../utils.js';
const isEven = (num) => num % 2 === 0;
const options = {
  generateQuestion: () => {
    const MAX_NUM = 100;
    const num = generateRandom(MAX_NUM);
    return { string: `${num}`, value: num };
  },
  gameplayMsg: 'Answer "yes" if the number is even, otherwise answer "no".',
  isCorrectInput: (input) => input === 'yes' || input === 'no',
  getCorrectAnswer: (question) => (isEven(question.value) ? 'yes' : 'no'),
  isCorrectAnswer: (input, question, getCorrectAnswer) => (
    input === getCorrectAnswer(question)
  ),
};
export default options;
