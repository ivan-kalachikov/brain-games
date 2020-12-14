#!/usr/bin/env node
import readlineSync from 'readline-sync';
import requestName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = requestName();
const generateRandomNumber = () => Math.ceil(Math.random() * 100);
const isCorrectInput = (input) => input === 'yes' || input === 'no';
const isEven = (num) => num % 2 === 0;
const getCorrectAnswer = (num) => (isEven(num) ? 'yes' : 'no');
const isCorrectAnswer = (input, num) => input === getCorrectAnswer(num);
const gameplay = () => {
  let count = 1;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (count <= 3) {
    const num = generateRandomNumber();
    const answer = readlineSync.question(`Question: ${num} `);
    console.log(`Your answer: ${answer}`);
    if (!isCorrectInput(answer) || !isCorrectAnswer(answer, num)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(num)}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  if (count === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};
gameplay();
