function findLongestWordLength(str) {
  let longest = 0;
  let words = str.split(' ')
  for (let n in words){

    if (words[n].length > longest ){
      longest = words[n].length;
    }else{
      continue;
    }
  }
  return longest;

}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

//------------- Alternative solution --------------//
//
// function findLongestWordLength(str) {
//   return Math.max(...str.split(" ").map(word => word.length));
// }
