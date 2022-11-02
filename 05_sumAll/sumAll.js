const sumAll = function (start, end) {
  let result = 0;
  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
  if (start < 0 || end < 0) return "ERROR";
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }
  for (let i = start; i < end + 1; i++) {
    result += i;
  }

  return result;
};

console.log(sumAll(4, 1)); // => 10
// Do not edit below this line
module.exports = sumAll;
