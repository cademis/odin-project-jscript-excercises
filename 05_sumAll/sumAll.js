const sumAll = function (lowest, highest) {
  let result = 0;
  for (let i = lowest; i <= highest; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
