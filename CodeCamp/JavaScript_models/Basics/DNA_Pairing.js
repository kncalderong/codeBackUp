function pairElement(str) {
  let result = [];
  str
  .split("")
  .map(function(item){
    if (item == "A"){
      result.push([item,"T"])
    } else if( item == "C"){
      result.push([item, "G"])
    } else if( item == "T"){
      result.push([item, "A"])
    } else if(item == "G"){
      result.push([item, "C"])
    }
  })
  return result
}

console.log(pairElement("GCG"));


// // Alternative Solution
//
// function pairElement(str) {
//   //create object for pair lookup
//   var pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
//   };
//   //split string into array of characters
//   var arr = str.split("");
//   //map character to array of character and matching pair
//   return arr.map(x => [x, pairs[x]]);
// }
//
// //test here
// pairElement("GCG");
