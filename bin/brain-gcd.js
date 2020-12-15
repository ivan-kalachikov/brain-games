#!/usr/bin/env node
import gameplay from '../src/index.js';

const euclideanAlgorithm = (values) => {
  let [a, b] = values;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};
const options = {
  genQuestion: () => {
    const maxNum = 100;
    const a = Math.ceil(Math.random() * maxNum);
    const b = Math.ceil(Math.random() * maxNum);
    return { string: `${a} ${b}`, values: [a, b] };
  },
  gameplayMsg: 'Find the greatest common divisor of given numbers.',
  isCorrectInput: (input) => typeof Number(input) === 'number',
  getCorrectAnswer: (question) => euclideanAlgorithm(question.values),
  isCorrectAnswer: (input, question, getCorrectAnswer) => (
    Number(input) === getCorrectAnswer(question)
  ),
};
gameplay(options);
