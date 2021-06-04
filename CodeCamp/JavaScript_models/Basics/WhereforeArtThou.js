function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet

  var srcKeys = Object.keys(source); // first get the keys of the source

  return collection.filter(function(obj) { // will iterate over each object of the array and look for..
    return srcKeys.every(function(key) {  // return true if srcKeys return true of obj.hasOwnProperty(key) and the value is the same.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
