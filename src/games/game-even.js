const isEven = (num) => num % 2 === 0;
const options = {
  generateQuestion: () => {
    const maxNum = 100;
    const num = Math.ceil(Math.random() * maxNum);
    return { string: `${num}`, value: num };
  },
  gameplayMsg: 'Answer "yes" if the number is even, otherwise answer "no".',
  isCorrectInput: (input) => input === 'yes' || input === 'no',
  getCorrectAnswer: (question) => (isEven(question.value) ? 'yes' : 'no'),
  isCorrectAnswer: (input, question, getCorrectAnswer) => (
    input === getCorrectAnswer(question)
  ),
};
export default options;
