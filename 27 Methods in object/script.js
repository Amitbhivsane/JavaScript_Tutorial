let person = {
  firstname: "amit",
  lastname: "bhivsane",
};
// person.sayhello = function () {
//   console.log("hello");
// };
// person.sayhello();

console.log("--------------------------");

// function greet() {
//   console.log("hello");
// }

// person.sayhello = greet;
//person.sayhello();

console.log("----------------------");
let person2 = {
  firstname: "amit",
  lastname: "bhivsane",
  sayhello: function () {
    console.log("hello");
  },
};

person2.sayhello();
