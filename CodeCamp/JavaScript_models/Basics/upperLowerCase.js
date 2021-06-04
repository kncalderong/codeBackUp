function titleCase(str) {
  let newStr = str.split(' ')
  let finalStr = [];

  for (let a in newStr){
    let subStr = newStr[a].split('');
    subStr.splice(0,1,subStr[0].toUpperCase());

    for (let i = 1; i < subStr.length; i++){
      subStr.splice(i,1,subStr[i].toLowerCase());
    }
    finalStr.push(subStr.join(''))
  }
  return finalStr.join(' ')
}

console.log(titleCase("I'm a little tEA pot"))

//------------------Alternative solution-------------------------//

//They lowerCase first, then iterate with map(),replacing first letter as capitalized
//
// function titleCase(str) {
//   var convertToArray = str.toLowerCase().split(" ");
//   var result = convertToArray.map(function(val) {
//     return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
//   });
//   return result.join(" ");
// }
//
// titleCase("I'm a little tea pot");
