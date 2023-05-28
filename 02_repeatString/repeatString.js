// create a function that repeats a string by a provided number

const repeatString = function (string, num) {
  let word = string;
  for (let i = 1; i < num; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
