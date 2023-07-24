// let stud = {};
// console.log(stud);

// let stud2 = {
//   name: "amit",
// };
// console.log(stud2.hasOwnProperty("name")); //inbuild property

function Person(first, last, a) {
  this.firstname = first;
  this.lastname = last;
  this.age = a;
}
console.log(Person.prototype);
Person.prototype.fullName = function () {
  //method
  console.log(this.firstname + "" + this.lastname);
};

let Person1 = new Person("amit", "bhivsane", 25);
let Person2 = new Person("Ram", "sharma", 54);

console.log(Person1);
console.log(Person2);
