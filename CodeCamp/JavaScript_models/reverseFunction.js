function reverseString(str) {
  let newStr = [];
  for(let a in str){
    newStr.unshift(str[a]);
  }
  str = newStr.join('')
  return str;
}

reverseString("hello");
