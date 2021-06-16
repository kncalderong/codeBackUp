function fearNotLetter(str) {
  let ABC = "abcdefghijklmnopqrstuvwxyz";
  let pos = ABC.search(str[0])
  let contador = 0;

  for (let i = pos; i < ABC.length;i++){
    if (ABC[i] != str[contador]){
      return ABC[i]
    } else {
      contador += 1
      continue
    }
  }
  return undefined;

}

console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));
