const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let str;
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    str = matrix[i];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === '^^') {
             count = count + 1;
      }
    }
  }
  return count;
};
