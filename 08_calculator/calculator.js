const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  return a.reduce((obj, item) => {
    return obj + item;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((obj, item) => {
    return obj * item;
  });
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) return 1;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
