const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (members instanceof Array) {
    let result = '';
    const arr = members;

    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
        result = arr[i].trim()[0] + result;
      }
    }
    return result.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }
};
