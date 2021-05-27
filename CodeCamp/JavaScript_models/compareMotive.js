function confirmEnding(str, target) {
  let test = [];
  console.log(str[str.length-1]);
  for(let i = (str.length-1);i >= (str.length-target.length); i --){
    console.log(str[i])
    test.unshift(str[i]);
  }
  let word = test.join('');
  if (word==target){
    return true
  } else {
    return false
  }
}

console.log(confirmEnding("Open sesame", "same"));

//-----------------Alternative answer----------------------//

// function confirmEnding(str, target) {
//   return str.slice(str.length - target.length) === target;
// }

or

function confirmEnding(str, target) {
  let re = new RegExp(target + "$", "i");
  return re.test(str);
}
//RegExp constructor makes a regexp with target$ to find at the end.
