class person {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
  sayhi() {
    console.log("Hi..."); //method
  }
  static sproperty = "somthing";
  static hello() {
    console.log("hello"); //static method
  }
}

let person1 = new person("amit", 56);
console.log(person1);

person1.sayhi(); //object
person.hello(); //class

console.log(person.sproperty); //static property
