// var studen = {
//   firstName: "amit",
//   lastName: "bhivsane",
//   age: 22,
//   class: 5,
// };

// console.log(studen);

function Student(first, last, age, clas, col) {
  this.firstName = first;
  this.lastName = last;
  this.sAge = age;
  this.sclass = clas;
  this.fcolor = "red";
}

var Student1 = new Student("amit", "bhivsane", 25, 6);
var Student2 = new Student("hemant", "patil", 22, 7);
var Student3 = new Student("dhiraj", "rane", 22, 8);

console.log(Student1);
console.log(Student2);
console.log(Student3);

console.log("---add some info into the object of constructor--------");

Student1.nationality = "indian";

console.log("=add method=");
Student1.name = function () {
  return this.firstName + "" + this.lastName;
};

console.log(Student1.name());

console.log("==object prototype==");
Student.prototype.city = "jalgaon";

console.log(Student2.city);

console.log("-----------nested objet--------------");

var user = {
  id: 101,
  email: "amit@gmail.com",
  persinalInfo: {
    P_name: "amita",
    Pcity: "pune",
    country: "india",
    college: {
      collegeName: "mj",
    },
  },
};

console.log(user);
console.log(user.persinalInfo);
