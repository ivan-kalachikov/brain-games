const generateRandom = (maxInclude, minInclude = 1) => (
  Math.floor(Math.random() * (maxInclude - minInclude + 1)) + minInclude
);

export default generateRandom;
