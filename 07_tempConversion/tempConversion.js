const ftoc = function (t) {
  let result = (t - 32) * 0.5556;
  return Math.round(result * 10) / 10;
};

const ctof = function (t) {
  return Math.round((t * 1.8 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
