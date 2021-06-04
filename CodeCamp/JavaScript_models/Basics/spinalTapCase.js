function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");

// Check this regex
// .split(/\s|_|(?=[A-Z])/)
//
// Split the string at one of the following conditions (converted to an array)
// a whitespace character [\s] is encountered
// underscore character [_] is encountered
// or is followed by an uppercase letter [(?=[A-Z])]


// Another solution
// 
// function spinalCase(str) {
//   // "It's such a fine line between stupid, and clever."
//   // --David St. Hubbins
//
//   return str
//     .split(/\s|_|(?=[A-Z])/)
//     .join("-")
//     .toLowerCase();
// }
