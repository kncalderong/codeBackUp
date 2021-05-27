//Create a Parent constructor
function Animal() { }

//Create protoype of parent Constructor
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

//Create a child constructor
function Dog(name) {
  this.name= name;
 }


//To inherite from superType, keeping the child as official constructor:
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor= Dog;


// To add a unique property after inheritance!:
Dog.prototype.describe = function (){
      console.log('dog.protypeOrigin');
  };

// Create an instance with both prototypes properties
let lucas = new Dog('Kevin')

console.log(lucas)
console.log(lucas.eat())
console.log(lucas.describe())
