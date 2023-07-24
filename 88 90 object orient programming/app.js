//old 1
let person1 = {
  firstName: "amit", //object
  age: 25,
};

console.log(person1.age);
person1.age = 30; // change age
console.log(person1.age);

//using method
let person2 = {
  firstName: "swapnil", //object
  lastname: "bhivsane",
  age: 55,

  Fullname: function () {
    //method
    console.log(this.firstName + " " + this.lastname);
  },
};
person2.Fullname();

//or

let person3 = new Object();

(person3.firstName = "swapnil"), //object
  (person3.lastname = "patil"),
  (person3.age = 55),
  (person3.Fullname = function () {
    //method
    console.log(this.firstName + " " + this.lastname + " " + this.age);
  });

person3.Fullname();
