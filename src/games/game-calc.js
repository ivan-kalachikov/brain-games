import generateRandom from '../utils.js';

const MAX_NUM = 100;
const operations = ['+', '-', '*'];

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

const generateGameRound = () => {
  const a = generateRandom(MAX_NUM);
  const b = generateRandom(MAX_NUM);
  const operationIndex = generateRandom(operations.length - 1, 0);
  const operation = operations[operationIndex];
  const correctAnswer = String(calculate(a, b, operation));
  return { questionString: `${a} ${operation} ${b}`, correctAnswer };
};

export default () => ({
  generateGameRound,
  gameplayMsg,
});
