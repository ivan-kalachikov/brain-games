#!/usr/bin/env node
import gameplay from '../../src/index.js';

const options = {
  genQuestion: () => Math.ceil(Math.random() * 100),
  gameplayMsg: 'Answer "yes" if the number is even, otherwise answer "no".',
  isCorrectInput: (input) => input === 'yes' || input === 'no',
  getCorrectAnswer: (num) => (num % 2 === 0 ? 'yes' : 'no'),
  isCorrectAnswer: (input, num, getCorrectAnswer) => input === getCorrectAnswer(num),
}
gameplay(options);
