const generateRandom = (maxInclude, minInclude = 1) => (
  Math.floor(Math.random() * (maxInclude - minInclude + 1)) + minInclude
);

const greetUser = (name) => {
  console.log(`Hello, ${name}!`);
};

export { greetUser };
export default generateRandom;
