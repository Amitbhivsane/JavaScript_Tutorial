let person = {
  firstname: "amit",
  lastname: "bhivsane",
  sayhello() {
    console.log("hello ! i am " + this.firstname + "and i have a " + car.brand);
  },
};

let car = {
  brand: "maruti",
  model: "safari",
};
person.sayhello();
