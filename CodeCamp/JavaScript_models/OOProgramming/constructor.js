function Dog(name,color) {
  this.name=name;
  this.color = color;
}

// to set a new property as prototype:

Dog.prototype.numLegs = 4; 


let terrier = new Dog('lucas','white')
