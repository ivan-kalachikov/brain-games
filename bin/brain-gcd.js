#!/usr/bin/env node
import gameplay from '../src/index.js';

const euclideanAlgorithm = (a, b) => {
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  return a + b;
};
const options = {
  genQuestion: () => {
    const a = Math.ceil(Math.random() * 100);
    const b = Math.ceil(Math.random() * 100);
    return {string: `${a} ${b}`, values: [a, b]};
  },
  gameplayMsg: 'Find the greatest common divisor of given numbers.',
  isCorrectInput: (input) => typeof Number(input) === 'number',
  getCorrectAnswer: (question) => {
    const [a, b] = question.values;
    return euclideanAlgorithm(a, b);
  },
  isCorrectAnswer: (input, question, getCorrectAnswer) => Number(input) === getCorrectAnswer(question),
}
gameplay(options);
