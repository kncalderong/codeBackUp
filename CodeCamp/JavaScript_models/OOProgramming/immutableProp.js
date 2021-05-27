function Bird() {
  let weight = 15;
  this.getWeight = () =>{
    return weight;
  }
}

let falcon = new Bird();

console.log(falcon.getWeight())
