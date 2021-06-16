function steamrollArray(arr) {
  let newArr= [];
  for(let a in arr){
    if (!Array.isArray(arr[a])){
      newArr.push(arr[a])
    }else{
      for (let b in arr[a]){
        if(!Array.isArray(arr[a][b])){
          newArr.push(arr[a][b])
        }else{
          for(let c in arr[a][b]){
            if(!Array.isArray(arr[a][b][c])){
              newArr.push(arr[a][b][c])
            }else{
              for(let d in arr[a][b][c]){
                if(!Array.isArray(arr[a][b][c][d])){newArr.push(arr[a][b][c][d])}
              }
            }
          }
        }
      }
    }
  }
  return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));


//Alternative solution, using spread (arr...)

// function steamrollArray(arr) {
//   const flat = [].concat(...arr);
//   return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
// }
//
// steamrollArray([1, [2], [3, [[4]]]]);
