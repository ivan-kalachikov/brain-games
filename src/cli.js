import readlineSync from 'readline-sync';

const requestName = () => readlineSync.question('May I have your name? ');

export default requestName;
