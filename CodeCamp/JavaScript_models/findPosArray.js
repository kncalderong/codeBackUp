function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort();
  const findPos = (element) => element == num;
  let index = arr.findIndex(findPos)
  return index;
}

getIndexToIns([40, 60], 50);

//-----------------Alternative----------------------//
// with the use of .indexOf()

// function getIndexToIns(arr, num) {
//   arr.push(num);
//   arr.sort(function(a, b) {
//     return a - b;
//   });
//   return arr.indexOf(num);
// }
