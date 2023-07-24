class emp {
  constructor(n) {
    this.name = n;
  }
  msg() {
    console.log("hello how");
  }
}

class manger extends emp {
  constructor(p, d) {
    super(p);
    this.department = d;
  }
  msg() {
    console.log("ramesh");
  }
  info() {
    this.msg();
    super.msg(); //method call
    console.log(this.name + " is manager of department" + this.department);
  }
}

let mng1 = new manger("amit", "web development");
console.log(mng1);
//console.log(mng1.msg());
console.log(mng1.info());

class admin extends manger {}
let admin1 = new admin("bhivsane", "c developer");
console.log(admin1);
