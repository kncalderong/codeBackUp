function destroyer(arr, ...args) {
  args = [...args]
  let newArr = []
  for ( let i = 0; i < arr.length; i++){
    console.log(arr[i])
    console.log(args.includes(arr[i]))
    if (args.includes(arr[i])=== false){
      newArr.push(arr[i])
    }
  }
  console.log(newArr)
  return newArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2,3);


//Alternative solution

// function destroyer(arr, ...valsToRemove) {
//   return arr.filter(elem => !valsToRemove.includes(elem));
// }
