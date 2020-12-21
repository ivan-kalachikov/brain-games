import generateRandom from '../utils.js';

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error('Something went wrong, check operation argument');
  }
};

const gameplayMsg = 'What is the result of the expression?';
const isCorrectInput = (input) => typeof input === 'number';
const getCorrectAnswer = (values) => {
  const [a, b, operation] = values;
  return calculate(a, b, operation);
};

const generateQuestion = () => {
  const MAX_NUM = 100;
  const a = generateRandom(MAX_NUM);
  const b = generateRandom(MAX_NUM);
  const operations = ['+', '-', '*'];
  const operationIndex = generateRandom(operations.length - 1, 0);
  const operation = operations[operationIndex];
  const correctAnswer = getCorrectAnswer([a, b, operation]);
  return { questionString: `${a} ${operation} ${b}`, correctAnswer };
};

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
});
