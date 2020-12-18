import requestName, { requestAnswer } from './cli.js';
import { greetUser } from './utils.js';

const runGame = (gameLogic) => {
  const {
    generateQuestion, gameplayMsg, isCorrectInput, getCorrectAnswer, isCorrectAnswer,
  } = gameLogic();

  let currentStep = 0;
  const MAX_STEPS = 3;

  console.log('Welcome to the Brain Games!');
  const name = requestName(); // ask players name here
  greetUser(name);
  console.log(gameplayMsg); // print the rules

  while (currentStep < MAX_STEPS) {
    const question = generateQuestion();
    const answer = requestAnswer(question.string);
    console.log(`Your answer: ${answer}`);

    if (!isCorrectInput(answer) || !isCorrectAnswer(answer, question)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(question)}'.\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    currentStep += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
export default runGame;
