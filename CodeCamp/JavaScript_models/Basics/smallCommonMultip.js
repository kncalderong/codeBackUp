function smallestCommons(arr) {
  let newArr = arr.sort((a,b)=> a-b);
  let first = newArr[0];
  let second = newArr[1];
  for (let i = first+1; i < second; i++){
    newArr.push(i);
  }
  newArr = newArr.sort()
  let num = second;
  while(!newArr.every(val => num % val ==0)){
    num +=1
  }
  console.log(num)
  return num;
}


smallestCommons([2,10]);
