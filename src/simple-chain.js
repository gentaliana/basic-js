const CustomError = require('../extensions/custom-error');

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || !this.result[position - 1]) {
      this.result = [];
      throw new Error('error');
    };
    this.result.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const newRes = this.result.join('~~');
    this.result = [];
    return newRes;
  },
};

module.exports = chainMaker;
