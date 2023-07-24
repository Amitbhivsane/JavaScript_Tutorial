function Person(first, last, a) {
  //constructor
  this.firstName = first;
  this.lastName = last;
  this.age = a;

  this.changeage = function (newage) {
    this.age = newage;
  };
}
let p1 = new Person("amit", "bhivsane", 25);
let p2 = new Person("ramu", "patil", 54);

console.log(p1);
p1.changeage(255);
console.log(p1);
console.log(p2);
