function sayHello() {
  console.log("hello");
}
function sayHi() {
  console.log("hi...");
}

function add(num1, num2, callback) {
  console.log(num1 + num2);
  callback();
}
let a = 20;
let b = 10;
add(a, b, sayHello);
add(30, 33, sayHi);

add(30, 35, function () {
  console.log("bye..");
});
