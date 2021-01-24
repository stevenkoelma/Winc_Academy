const addOne = (numbers) => numbers.map((number) => number + 1);

const getWordLengths = (someWords) => someWords.map((word) => word.length);

const findNeedle = (words, word) => words.indexOf(word)

module.exports = {
  addOne,
  getWordLengths,
  findNeedle,
};
