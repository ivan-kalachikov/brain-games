import readlineSync from 'readline-sync';
import requestName from './cli.js';

const gameplay = (options) => {
  const {
    generateQuestion, gameplayMsg, isCorrectInput, getCorrectAnswer, isCorrectAnswer,
  } = options;
  let currentStep = 0;
  const maxSteps = 3;
  console.log('Welcome to the Brain Games!');
  const name = requestName(); // ask players name here
  console.log(gameplayMsg); // print the rules
  while (currentStep <= maxSteps - 1) {
    const question = generateQuestion();
    const answer = readlineSync.question(`Question: ${question.string} `);
    console.log(`Your answer: ${answer}`);
    if (!isCorrectInput(answer) || !isCorrectAnswer(answer, question, getCorrectAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(question)}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    currentStep += 1;
  }
  if (currentStep === maxSteps) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default gameplay;
