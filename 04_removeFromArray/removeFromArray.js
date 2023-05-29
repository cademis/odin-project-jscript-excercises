const removeFromArray = function (array, ...num) {
  return array.filter((values) => !num.includes(values));
};

// Do not edit below this line
module.exports = removeFromArray;
