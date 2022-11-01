const repeatString = function (s, num) {
  let result = "";
  if (num === 0) {
    result = "";
  } else if (num === 1) {
    result = s;
  } else if (num < 0) {
    result = "ERROR";
  } else {
    for (i = 1; i <= num; i++) {
      result += s;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
