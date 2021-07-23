function palindrome(str) {
  let newArr = str.toLowerCase().split('')
  let regex = /[a-z0-9]/
  newArr = newArr.filter(item => regex.test(item))
  let end = newArr.length-1
  for (let a in newArr){
    if (newArr[a] != newArr[end]){
      return false
    } else{
      end-=1
      continue
    }
  }
  return true;
}
console.log(palindrome("anitalavalatina"));
