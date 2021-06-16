function sumPrimes(num) {
  let prim = [];
  for (let i = 2;i<=num;i++){
    if ((prim
    .filter(function(val){
      return i%val ==0
    }))
    .length > 0){
      continue
    } else{
      prim.push(i)
    }
  }
  prim.unshift(1);

  console.log(prim)
  return prim
  .reduce((a,b)=>a+b);
}

console.log(sumPrimes(10));

//observador
//disciplinado
//responsable
