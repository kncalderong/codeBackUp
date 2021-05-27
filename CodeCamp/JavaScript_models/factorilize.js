function factorialize(num) {
  let result = 1;
  let list = [];
  if (num == 0){
    return 1;
  }
  else{
    for (let i = 1; i <=num; i++ ){
      list.push(i)
    }

    for (let n in list ){
      result = list[n] * result;
      console.log("temporal result is: ", result)
    }
  }
  return result;
}

factorialize(5);


// ----------- Alternative solution ------------- //
//Recursive, its when the function call itself inside, but with a different parameter

// function factorialize(num) {
//   if (num === 0) {
//     return 1;
//   }
//   return num * factorialize(num - 1);
// }
//
// factorialize(5);
