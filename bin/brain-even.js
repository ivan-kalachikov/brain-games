#!/usr/bin/env node
import gameplay from '../src/index.js';

const isEven = (num) => num % 2 === 0;
const options = {
  genQuestion: () => {
    const num = Math.ceil(Math.random() * 100);
    return { string: `${num}`, value: num };
  },
  gameplayMsg: 'Answer "yes" if the number is even, otherwise answer "no".',
  isCorrectInput: (input) => input === 'yes' || input === 'no',
  getCorrectAnswer: (question) => (isEven(question.value) ? 'yes' : 'no'),
  isCorrectAnswer: (input, question, getCorrectAnswer) => (
    input === getCorrectAnswer(question)
  ),
};
gameplay(options);
