#!/usr/bin/env node
import gameplay from '../src/index.js';

const options = {
  genQuestion: () => {
    const maxNum = 100;
    const start = Math.ceil(Math.random() * maxNum);
    const step = Math.ceil(Math.random() * 9);
    const arr = [];
    const length = 9;
    const hiddenIndex = Math.floor(Math.random() * length);
    let value;
    for (let i = 0; i < length; i += 1) {
      if (hiddenIndex === i) {
        arr[i] = '..';
        value = start + step * (i + 1);
      } else {
        arr[i] = start + step * (i + 1);
      }
    }
    return { string: `${arr.join(' ')}`, value };
  },
  gameplayMsg: 'What number is missing in the progression?',
  isCorrectInput: (input) => typeof Number(input) === 'number',
  getCorrectAnswer: (question) => question.value,
  isCorrectAnswer: (input, question, getCorrectAnswer) => (
    Number(input) === getCorrectAnswer(question)
  ),
};
gameplay(options);
