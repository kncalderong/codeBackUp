function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift(); // Elimina el elemento del inicio del array, en este caso, que no cumpla la condicion; va modificando el array
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});
