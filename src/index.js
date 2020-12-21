import readlineSync from 'readline-sync';

const requestAnswer = (questionString) => {
  const answer = readlineSync.question(`Question: ${questionString} `);
  return !answer.isNaN ? Number(answer) : answer;
  // check an answer is a number, convert to Number it in this case, return String in another case;
};

const runGame = (gameLogic) => {
  const {
    generateQuestion, gameplayMsg, isCorrectInput,
  } = gameLogic();

  let currentStep = 0;
  const MAX_STEPS = 3;

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? '); // ask players name here
  console.log(`Hello, ${name}!`);
  console.log(gameplayMsg); // print the game rules

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
