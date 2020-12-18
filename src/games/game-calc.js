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

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const operationIndex = Math.floor(Math.random() * operations.length);
  return operations[operationIndex];
};

const generateQuestion = () => {
  const MAX_NUM = 100;
  const a = generateRandom(MAX_NUM);
  const b = generateRandom(MAX_NUM);
  const operation = getRandomOperation();
  return { string: `${a} ${operation} ${b}`, values: [a, b, operation] };
};

const gameplayMsg = 'What is the result of the expression?';
const isCorrectInput = (input) => typeof Number(input) === 'number';
const getCorrectAnswer = (question) => {
  const [a, b, operation] = question.values;
  return calculate(a, b, operation);
};
const isCorrectAnswer = (input, question) => Number(input) === getCorrectAnswer(question);

export default () => ({
  generateQuestion,
  gameplayMsg,
  isCorrectInput,
  isCorrectAnswer,
  getCorrectAnswer,
});
