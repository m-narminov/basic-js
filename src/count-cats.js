module.exports = function countCats(matrix) {
  let res = 0;
  let cat = '^^';

  matrix.forEach(arr => (res += arr.filter(el => el === cat).length));
  return res;
};
