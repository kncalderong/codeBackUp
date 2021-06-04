function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

// same is:  const curried = x => y => x + y

curried(1)(2)
//curried(1)(2) would return 3.


function impartial(x, y, z) {
  return x + y + z;
}
var partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13


//This is useful when you don't know what could it be a last argument. in the examples
//of above, the partialFn(10), whas the last argument, called in "this"

//bind, allows call arguments between two functions
