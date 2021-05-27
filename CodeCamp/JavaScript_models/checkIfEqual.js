function mutation(arr) {
  let first = arr[0].toLowerCase().split('');
  let second = arr[1].toLowerCase().split('');
  console.log(first)

  for (let a in second){
    if (first.includes(second[a])){
      console.log('contained')
      continue
      } else{
        return false;
      }
    }
  return true;
}

console.log(mutation(["floor", "for"]))
