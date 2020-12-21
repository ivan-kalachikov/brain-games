import readlineSync from 'readline-sync';

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
    const userInput = readlineSync.question(`Question: ${questionString} `);
    const answer = userInput.match(/^-?\d+$/) ? Number(userInput) : userInput;
    // check an user input is a number, convert it to Number in this case,
    // return String in another case;
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
