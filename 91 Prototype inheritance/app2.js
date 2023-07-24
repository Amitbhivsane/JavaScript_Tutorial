function Creature(ls) {
  this.lifespan = ls;
}

Creature.prototype.breath = function () {
  console.log("breathing");
};

let Creature1 = new Creature(100);
console.log(Creature1);

function Person(first, last, a) {
  this.firstname = first;
  this.lastname = last;
  this.age = a;
}
Person.prototype.fullName = function () {
  //method
  console.log(this.firstname + "" + this.lastname);
};
Person.prototype.__proto__ = Object.create(Creature.prototype); //add person into creature

let Person1 = new Person("amit", "bhivsane", 25);
let Person2 = new Person("Ram", "sharma", 54);

console.log(Person1.fullName());
console.log(Person2.breath());
