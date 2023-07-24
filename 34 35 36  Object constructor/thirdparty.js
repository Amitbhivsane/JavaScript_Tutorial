//getter setter

// var person = {
//   name: "amit",
//   age: 25,
//   //method call
//   getName: function () {
//     return this.name.toUpperCase();
//   },
// };

// console.log(person.getName());

// var person = {
//   name: "amit",
//   age: 25,
//   //property call
//   get getName() {
//     return this.name.toUpperCase();
//   },
// };

// console.log(person.getName);

// /setter

var person = {
  name: "amit",
  age: 25,
  //setter
  set setName(n) {
    this.name = n.toUpperCase();
  },
};

person.setName = "bhivsane";
console.log(person);
