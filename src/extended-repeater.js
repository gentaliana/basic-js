const { reset } = require('sinon');
const CustomError = require('../extensions/custom-error');

module.exports = function repeater(str, options) {
  const separator = options.separator ?? '+';
  const additionSeparator = options.additionSeparator ?? '|';
  const addition = options.addition !== undefined ? options.addition : '';
  const repeatTimes = options.repeatTimes ?? 1;
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;

  let resultGeneral = '';
  let result = '';

  for (let i = 1; i < additionRepeatTimes; i++) {
    result = result + addition + additionSeparator;
  }

  result += addition;

  for (let i = 1; i < repeatTimes; i++) {
    resultGeneral = resultGeneral + str + result + separator;
  }

  return resultGeneral + str + result;
};
