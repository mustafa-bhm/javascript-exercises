const removeFromArray = function (arr, v) {
  let result = [];
  let args = Array.from(arguments);

  let array = args[0];
  let param = args.slice(1);

  // console.log(args);
  // console.log(array);
  // console.log(param);

  result = array.filter((value) => {
    return !param.includes(value);
  });

  return result;
};
console.log(removeFromArray([1, 2, 3, 9], 22, 9, 44));

// Do not edit below this line
module.exports = removeFromArray;
