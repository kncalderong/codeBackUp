function translatePigLatin(str) {
  let consonants ="bcdfghjklmnpqrstvwxys"
  let result = "";

  if (consonants.search(str[0]) !== -1){
    let vowelPos = str.search(/[aeiou]/)
    result = str.substring(vowelPos)+str.substring(0, vowelPos)
    result = result.concat('ay')
  } else {
    result = str.concat('way');
  }

  return result;
}

console.log(translatePigLatin("eight"));


// Another solution

// function translatePigLatin(str) {
//   let consonantRegex = /^[^aeiou]+/; //if the start is a consonant

//   let myConsonants = str.match(consonantRegex); // if start of str is a consonant

//   return myConsonants !== null  // if it is a consonant(s): replace with no characters, add them at the end and finish with  ay
//     ? str
//         .replace(consonantRegex, "")
//         .concat(myConsonants)
//         .concat("ay")
//     : str.concat("way");
// }
//
// translatePigLatin("consonant");
