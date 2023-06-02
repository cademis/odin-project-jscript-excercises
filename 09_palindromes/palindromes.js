const palindromes = function (string) {
  const stringClean = string.toLowerCase().replace(/[^0-9a-zA-Z]/g, "");
  const explodeString = [...stringClean];
  return explodeString.reverse().join("") === stringClean;
};

// Do not edit below this line
module.exports = palindromes;
