function rot13(str) {
  let newArr = str.split('')
  let ans = []
  let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let letter in newArr){
    let posIni = abc.indexOf(newArr[letter])
    if(posIni == -1){
      ans.push(newArr[letter])
      continue}
    let posFin = posIni+13
    if (posFin > 25){
      posFin = posFin-26
    }
    console.log(posIni, posFin)
    ans.push(abc[posFin])
  }
  return ans.join('')
 }
