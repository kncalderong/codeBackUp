function addTogether(...args) {
  let newArr = [...args];
  if (newArr.length >= 2){
    if (newArr.every(a => typeof a == "number")){
      return newArr.reduce((a,b)=>a+b)
    }else{
      return undefined
    }
  } else if (newArr.length ==1){
    if (typeof newArr[0] == "number" ){
      return function (val){
      let a = newArr[0];
      return a + val
      }
    }else
    return undefined
  }
}

console.log(addTogether(2)(3));
