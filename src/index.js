import readlineSync from 'readline-sync';
import requestName from './cli.js';

const gameplay = (options) => {
  const {
    genQuestion, gameplayMsg, isCorrectInput, getCorrectAnswer, isCorrectAnswer,
  } = options;
  let count = 1;
  console.log('Welcome to the Brain Games!');
  const name = requestName(); //ask players name here
  console.log(gameplayMsg); //print the rules
  while (count <= 3) {
    const question = genQuestion();
    const answer = readlineSync.question(`Question: ${question.string} `);
    console.log(`Your answer: ${answer}`);
    if (!isCorrectInput(answer) || !isCorrectAnswer(answer, question, getCorrectAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getCorrectAnswer(question)}'.\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  if (count === 4) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default gameplay;
