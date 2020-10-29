const CustomError = require('../extensions/custom-error');

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    const newArr = [];
    const copyArr = [...arr];
    for (let i = 0; i < copyArr.length; i++) {
      switch (copyArr[i]) {
        case '--discard-next':
          if (copyArr[i + 1] !== undefined) {
            i = i + 1;
            copyArr[i] = undefined;
          }
          break;
        case '--discard-prev':
          if (copyArr[i - 1] !== undefined) {
            newArr.pop();
          }
          break;
        case '--double-next':
          if (copyArr[i + 1] !== undefined) {
            newArr.push(copyArr[i + 1]);
          }
          break;
        case '--double-prev':
          if (copyArr[i - 1] !== undefined) {
            newArr.push(copyArr[i - 1]);
          }
          break;
        default:
          newArr.push(copyArr[i]);
      }
    }
    return newArr;
  } else {
    throw new Error();
  }
};
