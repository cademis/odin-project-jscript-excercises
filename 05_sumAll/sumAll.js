//use temp to swap 2 values of a variable

const sumAll = function (lowest, highest) {
  let result = 0;
  if (lowest < 0 || highest < 0) {
    return "ERROR";
  } else if (typeof lowest != "number" || typeof highest != "number") {
    return "ERROR";
  } else if (lowest > highest) {
    let temp = highest;
    highest = lowest;
    lowest = temp;
  }

  for (let i = lowest; i <= highest; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
