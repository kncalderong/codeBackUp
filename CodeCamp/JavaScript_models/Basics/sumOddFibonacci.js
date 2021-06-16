function sumFibs(num) {
  let prev1 = 1;
  let prev2 = 1;
  let current = 0;
  let fibo = [1,1];

  if (num==1){
    return 1;
  } else {
    while (current<num){
      current =prev1+prev2;
      if (current > num){
        break;
      }
      fibo.push(current)
      prev1 = prev2
      prev2 = current
    }
  }

  let odds = fibo.filter(value =>value % 2 == 1)
  let result = odds.reduce((a,b) => a+b)

  console.log(result)
  console.log(odds)
  return fibo;


}

console.log(sumFibs(10));
