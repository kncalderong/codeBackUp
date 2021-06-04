// This change the original order, so you can make a copy first, inside the function with [...arr]

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}
reverseAlpha(['l', 'h', 'z', 'b', 's']);

// this is the same as
// if (a === b){
//   return 0;
// } else{
//   if (a < b){
//     return 1;
//   } else{
//     return -1;
//   }
// }
