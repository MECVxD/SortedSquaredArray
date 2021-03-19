function sortedSquaredArray(array) {
  // Write your code here.
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = array[i] * array[i];
  }
  return result;
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9]));
