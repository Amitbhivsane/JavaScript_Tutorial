class emp {
  #name = ""; //private member
  constructor(n) {
    this.#name = n;
  }
  #getName() {
    console.log(this.#name); //private property..#name
  }
  pubfun() {
    this.#getName(); //function call..#getname
  }
}

let emp1 = new emp("amit");
console.log(emp1.pubfun());
