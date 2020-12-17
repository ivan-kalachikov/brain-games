const generateRandom = (maxInclude, minInclude = 1) => {
  return Math.floor(Math.random() * (maxInclude - minInclude + 1)) + minInclude;
}
export {generateRandom};
