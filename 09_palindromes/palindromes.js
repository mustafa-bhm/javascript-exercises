const palindromes = function (s) {
  let string = s.toLowerCase().replace(/[^a-z]/g, "");
  let reversedStr = string.split("").reverse().join("");
  if (string === reversedStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
