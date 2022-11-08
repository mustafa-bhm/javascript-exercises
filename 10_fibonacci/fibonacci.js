const fibonacci = function (a) {
  // to create fibonacci sequence

  let n1 = 0;
  let n2 = 1;
  let nextNum;
  let res = [];
  for (let i = 1; i < 300; i++) {
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
    res.push(n1);
  }
  // to return the approprite num
  if (a < 0) {
    return "OOPS";
  } else {
    let selectNum = res.splice(a - 1, 1);
    return Number(selectNum);
  }
};

// Do not edit below this line
module.exports = fibonacci;
