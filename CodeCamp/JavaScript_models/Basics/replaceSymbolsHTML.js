function convertHTML(str) {
  if (str.indexOf("&") !== -1){
    return str.replace(/[&]/g, "&amp;");
  } else if (str.indexOf("<") !== -1 && str.indexOf(">") !== -1){
    return str.replace(/<>/g, "&lt;&gt;");
  }  else if (str.indexOf("<") !== -1){
    return str.replace(/[<]/g, "&lt;");
  } else if (str.indexOf(">") !== -1){
    return str.replace(/[>]/g, "&gt;");
  } else if (str.indexOf('"') !== -1){
    return str.replace(/["]/g,"&quot;");
  } else if (str.indexOf("'")!== -1){
    return str.replace(/[']/g,"&apos;");
  }  else {
    return str;
  }
}

console.log(convertHTML("<>"));


// Alternative answer
//
// function convertHTML(str) {
//   // Use Object Lookup to declare as many HTML entities as needed.
//   const htmlEntities = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;"
//   };
//   // Using a regex, replace characters with it's corresponding html entity
//   return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
// }
//
// The second arguments for replace() is a function with the matched character
// as a parameter. It returns the correspondant entity from htmlEntities.
//
// // test here
// convertHTML("Dolce & Gabbana");
