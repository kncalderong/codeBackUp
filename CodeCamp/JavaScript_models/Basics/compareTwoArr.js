function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.map(function(item){
    if (!arr2.includes(item)){
      newArr.push(item)
    }
  })
    arr2.map(function(item){
    if (!arr1.includes(item)){
      newArr.push(item)
    }
  })

  return newArr;
}

console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

//Alternative solution

// function diffArray(arr1, arr2) {
//   return arr1
//     .concat(arr2)
//     .filter(item => !arr1.includes(item) || !arr2.includes(item));
// }

// Alternative solution #2
// function diffArray(arr1, arr2) {
//   return [...diff(arr1, arr2), ...diff(arr2, arr1)];
//
//   function diff(a, b) {
//     return a.filter(item => b.indexOf(item) === -1);
//   }
// }
