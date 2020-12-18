import readlineSync from 'readline-sync';

const requestName = () => {
  const name = readlineSync.question('May I have your name? ');
  return name;
};

const requestAnswer = (question) => readlineSync.question(`Question: ${question} `);

export { requestAnswer };
export default requestName;
