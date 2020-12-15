#!/usr/bin/env node
import gameplay from '../src/index.js';

const options = {
  genQuestion: () => {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 100);
    const operations = ['+', '-', '*']
    const operationIndex = Math.floor(Math.random() * operations.length);
    const operation = operations[operationIndex];
    return `${a} ${operation} ${b}`;
  },
  gameplayMsg: 'What is the result of the expression?',
  isCorrectInput: (input) => typeof Number(input) === 'number',
  getCorrectAnswer: (mathExpression) => eval(mathExpression),
  isCorrectAnswer: (input, mathExpression, getCorrectAnswer) => Number(input) === getCorrectAnswer(mathExpression),
}
gameplay(options);
