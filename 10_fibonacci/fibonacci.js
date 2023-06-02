// a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc.

const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  const fibList = [];
  if (num >= 0) {
    fibList.push(1);
  }
  if (num >= 1) {
    fibList.push(1);
  }

  for (i = 2; i < num; i++) {
    fibList.push(fibList[fibList.length - 1] + fibList[fibList.length - 2]);
  }
  return fibList[fibList.length - 1];
};

console.log(fibonacci(8));

// console.log(fibList1[num1 - 1]);

// Do not edit below this line
module.exports = fibonacci;
