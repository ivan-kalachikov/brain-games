import readlineSync from 'readline-sync';

const requestName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const requestAnswer = (question) => {
  const answer = readlineSync.question(`Question: ${question} `);
  return !answer.isNaN ? Number(answer) : answer;
  // check is an answer a Number, and convert to Number it this case
};

export { requestAnswer };
export default requestName;
