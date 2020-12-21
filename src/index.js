import requestName, { requestAnswer } from './cli.js';
import { greetUser } from './utils.js';

const runGame = (gameLogic) => {
  const {
    generateQuestion, gameplayMsg, isCorrectInput,
  } = gameLogic();

  let currentStep = 0;
  const MAX_STEPS = 3;

  console.log('Welcome to the Brain Games!');
  const name = requestName(); // ask players name here
  greetUser(name);
  console.log(gameplayMsg); // print the rules

  while (currentStep < MAX_STEPS) {
    const { questionString, correctAnswer } = generateQuestion();
    const answer = requestAnswer(questionString);
    console.log(`Your answer: ${answer}`);

    if (!isCorrectInput(answer) || answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    currentStep += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
export default runGame;
