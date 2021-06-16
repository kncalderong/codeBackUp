function uniteUnique(...arr) {
  let newArr = [...arr][0];

  for (let i = 1; i < ([...arr].length); i++){
    [...arr][i].map(function(item){
      if (newArr.indexOf(item)===-1){
        newArr.push(item);
      }
    })
  }
  console.log(newArr)
  return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


// Alternative Solution
// function uniteUnique(...arrays) {
//   //make an array out of the given arrays and flatten it (using the spread operator)
//   const flatArray = [].concat(...arrays);
//
//   // create a Set which clears any duplicates since it's a regular set and not a multiset
//   return [...new Set(flatArray)];
// }
// 
// // test here
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
