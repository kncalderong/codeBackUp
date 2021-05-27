// Largest of each array in a new array //

function largestOfFour(arr) {
  let newArr = []
  for(let subArr in arr){
    let longest = null;
    for (let n in arr[subArr]){
      if (arr[subArr][n]>longest || longest ==null){
        longest = arr[subArr][n];
      }
    }
    newArr.push(longest)
  }
  return newArr;
}


  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]))


//---------------Alternative solution ---------------//

// arr.map fill the new array; Function.appy.bind, apply Math.max() function

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}
