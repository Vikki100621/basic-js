const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {

  if (!Array.isArray(array)) {
    return false
  }
   else {
    let arr = array
      .map(element => {
        if (typeof element === 'string') {
          return element.trim().charAt(0).toUpperCase();
        }
      })
      .filter(element => element !== undefined);
    let result = arr.sort().join('');
    return result;
  }
}
module.exports = {
  createDreamTeam
};
