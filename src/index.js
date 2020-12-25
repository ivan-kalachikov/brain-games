import readlineSync from 'readline-sync';
import getNameAndGreet from './cli.js';

const MAX_STEPS = 3;

const runGame = (gameLogic) => {
  const {
    generateGameRound, gameplayMsg,
  } = gameLogic();

  const name = getNameAndGreet();
  console.log(gameplayMsg); // print the game rules

  for (let i = 0; i < MAX_STEPS; i += 1) {
    const { questionString, correctAnswer } = generateGameRound();
    console.log(`Question: ${questionString}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};
export default runGame;
