let car = "audi"; //global variable

function add() {
  let result = 55;
  console.log(result);
}
add(); //local
console.log(car); //global\

console.log("----------anonymous function---------------------");

let show = function () {
  console.log("hello");
};

show();

console.log("----------anonymous function 2---------------------");

setTimeout(function () {
  console.log("hello time 3 sec");
}, 3000);
