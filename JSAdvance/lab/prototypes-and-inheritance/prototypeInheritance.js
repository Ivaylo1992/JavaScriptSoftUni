function extendPrototype(classToExtend) {
  classToExtend.prototype.species = "Human";
  classToExtend.prototype.toSpeciesString = function () {
    return `I am a ${this.species}. ${this.toString()}`;
  };
}

class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const p = new Person ('Ivan', 'ivan@ivan.com');

console.log(p.species);
console.log(p.toString());
extendPrototype(Person);
console.log(p.species);
console.log(p.toSpeciesString());


