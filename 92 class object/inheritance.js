class emp {
  constructor(n) {
    this.name = n;
  }
}

class manger extends emp {}

let mng1 = new manger("amit");
console.log(mng1);
