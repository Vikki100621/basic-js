const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {

  resultsArr: [],

  getLength() {
    return this.resultsArr.length;
  },

  addLink(value) {
    this.resultsArr.push(`( ${value === undefined ? '' : value} )`);
    return this;
  },

  removeLink(position) {
   
   if (!Number.isInteger(position) || position <= 0 || position > this.resultsArr.length){
      this.resultsArr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.resultsArr.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.resultsArr.reverse();
    return this;
  },

  finishChain() {
    const result = this.resultsArr.join('~~');
    this.resultsArr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
