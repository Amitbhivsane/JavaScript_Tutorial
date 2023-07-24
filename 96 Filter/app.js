// arry = [2, 65, 21, 58, 22, 5, 6, 9, 77];
// let arry1 = arry.filter((val) => val > 10);
// console.log(arry1);
//-------------------------------------------------------------------
// arry = [2, 65, 21, 58, 22, 5, 6, 9, 77];
// let arry1 = arry.filter(function (val) {
//   return val > 10;
// });
// console.log(arry1);
//--------------------------------------------------------

let team = [
  {
    name: "amit",
    position: "developer",
  },
  {
    name: "mahesh",
    position: " software developer",
  },
  {
    name: "nita",
    position: "dbms developer",
  },
  {
    name: "gaurav",
    position: "developer",
  },
  {
    name: "satya",
    position: "developer",
  },
];

let developer = team.filter((val) => val.position == "developer");
console.log(developer);
