function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = []
  let tCalc = function(avgAlt){
    const T = Math.round((2*Math.PI)*(Math.sqrt((Math.pow((earthRadius+avgAlt),3))/GM)))
    return T
  }

  for (let a in arr){
    newArr.push({
      "name":arr[a]['name'],
      "orbitalPeriod": tCalc(arr[a]['avgAlt'])
    })
  }
  return newArr
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));

// Alternative cleaner solution

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   return arr.map(({ name, avgAlt }) => {
//     const earth = earthRadius + avgAlt;
//     const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
//     return { name, orbitalPeriod };
//   });
// }
//
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
