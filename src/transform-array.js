const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const transformedArr = arr.filter((elem, index, arr) => {
    switch (elem) {
      case "--discard-next":
        return index !== arr.length - 1;
      case "--discard-prev":
        return index !== 0 && arr[index - 2] !== "--discard-next";
      case "--double-next":
        return index !== arr.length - 1;
      case "--double-prev":
        return index !== 0 && arr[index - 2] !== "--discard-next";
      default:
        return true;
    }
  }).map((elem, index, arr) => {
    switch (elem) {
      case "--double-next":
        return arr[index + 1];
      case "--double-prev":
        return arr[index - 1];
      default:
        return elem;
    }
  });

  return transformedArr.filter(elem => elem !== undefined);
}




module.exports = {
  transform
};
