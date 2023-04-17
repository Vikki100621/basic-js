const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};

  for (let i = 0; i < domains.length; i++) {
    const deeparr = domains[i].split('.').reverse();
    let str = '';

    for (let j = 0; j < deeparr.length; j++) {
      str += '.' + deeparr[j];

      if (!obj[str]) {
        obj[str] = 1;
      } else {
       obj[str]++;
      }
    }
  }

  return obj;
}


module.exports = {
  getDNSStats
};
