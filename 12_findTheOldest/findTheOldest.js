const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (data) {
  const oldestPerson = data.reduce((oldest, currentPerson) => {
    if (currentPerson.yearOfDeath === undefined) {
      currentPerson.yearOfDeath = 2023;
    }
    console.log(currentPerson.yearOfDeath);
    const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
    const currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    return currentAge > oldestAge ? currentPerson : oldest;
  }, data[0]);
  return oldestPerson;
};

console.log(findTheOldest(people));

// round all the values and get the sum
const numbers = [15.5, 2.3, 1.1, 4.7];

let sumAll = (obj, cur) => {
  return obj + Math.round(cur);
};

let result = numbers.reduce(sumAll, 0);

console.log(result);

// Do not edit below this line
module.exports = findTheOldest;
