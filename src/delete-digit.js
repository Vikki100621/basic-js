const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n).split('');

  let maxnum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n.length; i++) {
    let num = Number(n.slice(0, i).join('') + n.slice(i + 1).join(''));
    maxnum = Math.max(maxnum, num);
  }
  return maxnum;
}

module.exports = {
  deleteDigit
};
