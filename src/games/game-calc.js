import {generateRandom} from '../utils.js';
const options = {
  generateQuestion: () => {
    const MAX_NUM = 100;
    const a = generateRandom(MAX_NUM);
    const b = generateRandom(MAX_NUM);
    const operations = ['+', '-', '*'];
    const operationIndex = Math.floor(Math.random() * operations.length);
    const operation = operations[operationIndex];
    return { string: `${a} ${operation} ${b}`, values: [a, b, operation] };
  },
  gameplayMsg: 'What is the result of the expression?',
  isCorrectInput: (input) => typeof Number(input) === 'number',
  getCorrectAnswer: (question) => {
    const [a, b, operation] = question.values;
    switch (operation) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      default:
        return false;
    }
  },
  isCorrectAnswer: (input, question, getCorrectAnswer) => (
    Number(input) === getCorrectAnswer(question)
  ),
};
export default options;
